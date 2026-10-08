"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trackEvent } from "@/lib/analytics";
import type { LeadFormType } from "@/lib/validation/lead-forms";
import {
  campusAmbassadorSchema,
  investorLeadSchema,
  parentLeadSchema,
  partnershipLeadSchema,
  studentWaitlistSchema,
} from "@/lib/validation/lead-forms";

const schemas = {
  student: studentWaitlistSchema,
  parent: parentLeadSchema,
  investor: investorLeadSchema,
  partnership: partnershipLeadSchema,
  campus_ambassador: campusAmbassadorSchema,
} as const;

const analyticsMap: Record<LeadFormType, Parameters<typeof trackEvent>[0]> = {
  student: "student_form_submit",
  parent: "parent_form_submit",
  investor: "investor_form_submit",
  partnership: "investor_form_submit",
  campus_ambassador: "campus_ambassador_request",
};

type LeadFormProps = {
  type: LeadFormType;
  investorSuccess?: boolean;
};

export function LeadForm({ type, investorSuccess }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schemas[type].safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`/api/leads/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackEvent(analyticsMap[type], { type });
      if (type === "investor") trackEvent("deck_request");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#E9E6F2] bg-[#F7F3FF] p-8 text-center" role="status">
        <p className="text-lg font-semibold text-[#111322]">
          {investorSuccess || type === "investor"
            ? "Thank you. Our team will review your request and get back to you."
            : "You're on the list. We'll be in touch."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate aria-busy={status === "loading"}>
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      {type === "student" && (
        <>
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="phone" label="Phone (optional)" />
          <Field name="age" label="Age" required placeholder="e.g. 17" />
          <Field name="city" label="City" required />
          <SelectField name="status" label="Current status" required options={["School", "College", "Gap year", "Working", "Other"]} />
          <Field name="institution" label="College / school" required />
          <Field name="interests" label="Interests" required />
          <TextField name="expectations" label="What do you want from Dino?" required />
          <Consent />
        </>
      )}

      {type === "parent" && (
        <>
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="phone" label="Phone" required />
          <Field name="studentAge" label="Student age" required />
          <Field name="city" label="City" required />
          <TextField name="concern" label="Main concern" required />
        </>
      )}

      {type === "investor" && (
        <>
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="organisation" label="Organisation" required />
          <Field name="role" label="Role" required />
          <SelectField name="stage" label="Investment stage" required options={["Pre-seed", "Seed", "Series A", "Family office", "Angel", "Other"]} />
          <Field name="chequeSize" label="Typical cheque size" required />
          <Field name="linkedin" label="LinkedIn (optional)" />
          <TextField name="message" label="Message" required />
        </>
      )}

      {type === "partnership" && (
        <>
          <Field name="name" label="Name" required />
          <Field name="organisation" label="Organisation" required />
          <Field name="email" label="Email" type="email" required />
          <SelectField name="orgType" label="Organisation type" required options={["University", "Employer", "Brand", "NGO", "Media", "Other"]} />
          <Field name="interest" label="Partnership interest" required />
          <TextField name="message" label="Message" required />
        </>
      )}

      {type === "campus_ambassador" && (
        <>
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="college" label="College" required />
          <Field name="year" label="Year" required />
          <Field name="city" label="City" required />
          <TextField name="why" label="Why do you want to become a Dino Ambassador?" required />
        </>
      )}

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}

function Field({
  name,
  label,
  required,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  );
}

function TextField({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Textarea id={name} name={name} required={required} />
    </div>
  );
}

function SelectField({
  name,
  label,
  required,
  options,
}: {
  name: string;
  label: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        required={required}
        className="flex h-11 w-full rounded-xl border border-[#E9E6F2] bg-white px-4 text-[15px] text-[#111322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2BFF]/40"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Consent() {
  return (
    <label className="flex items-start gap-3 text-sm text-[#606273]">
      <input type="checkbox" name="consent" value="true" required className="mt-1 h-4 w-4 rounded border-[#E9E6F2]" />
      <span>I agree to be contacted about Dino early access and understand the privacy policy.</span>
    </label>
  );
}
