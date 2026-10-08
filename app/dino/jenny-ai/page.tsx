import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { JennyPreview } from "@/components/dino/jenny-preview";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Jenny AI | Dino",
  description: "Meet Jenny — your always-on AI companion for student decisions that matter.",
  path: "/dino/jenny-ai",
});

export default function JennyPage() {
  return (
    <section className="section-pad">
      <div className="container-main grid gap-10 lg:grid-cols-2">
        <SectionHeading
          title="Meet Jenny."
          description="Senior strategist, mentor, and friend — using your Student Digital Twin for personalised guidance."
        />
        <JennyPreview />
        <p className="max-w-[680px] text-[#606273] lg:col-span-2">
          Jenny is not a therapist or counsellor. She helps you think, plan, and decide with context inside Dino.
        </p>
        <Link href="/students#waitlist" className="btn-primary lg:col-span-2 w-fit">
          Ask Jenny →
        </Link>
      </div>
    </section>
  );
}
