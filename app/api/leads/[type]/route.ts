import { NextResponse } from "next/server";
import type { z } from "zod";
import {
  campusAmbassadorSchema,
  investorLeadSchema,
  parentLeadSchema,
  partnershipLeadSchema,
  studentWaitlistSchema,
  type LeadFormType,
} from "@/lib/validation/lead-forms";

const schemas: Record<LeadFormType, z.ZodType> = {
  student: studentWaitlistSchema,
  parent: parentLeadSchema,
  investor: investorLeadSchema,
  partnership: partnershipLeadSchema,
  campus_ambassador: campusAmbassadorSchema,
};

export async function POST(request: Request, context: { params: Promise<{ type: string }> }) {
  const { type } = await context.params;
  if (!(type in schemas)) {
    return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
  }

  const body = await request.json();
  const parsed = schemas[type as LeadFormType].safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data as Record<string, unknown>;
  if (data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  // API-ready: wire to CRM, email, or database via LEAD_WEBHOOK_URL
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, ...data, receivedAt: new Date().toISOString() }),
    });
  }

  return NextResponse.json({ ok: true });
}
