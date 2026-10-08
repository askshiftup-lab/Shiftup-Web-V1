import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { DigitalTwinViz } from "@/components/sections/digital-twin-viz";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Student Digital Twin | Dino",
  description: "A student-owned, evolving intelligence model — the core of Dino.",
  path: "/dino/student-digital-twin",
});

export default function StudentDigitalTwinPage() {
  return (
    <section className="section-pad">
      <div className="container-main max-w-4xl">
        <SectionHeading
          title="Your Digital Twin belongs to you."
          description="Goals, interests, preferences, behaviour, skills, experiences, aspirations, and decisions — powering context, not surveillance."
        />
        <div className="mt-10">
          <DigitalTwinViz />
        </div>
        <Link href="/students#waitlist" className="btn-primary mt-10">
          Build my Dino →
        </Link>
      </div>
    </section>
  );
}
