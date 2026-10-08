import Link from "next/link";
import { GraduationCap, Users, Megaphone, GitBranch, Hourglass } from "lucide-react";
import { HomeHero } from "@/components/sections/home/hero";
import { CategoryBanner } from "@/components/sections/category-banner";
import { StudentWhyDino } from "@/components/sections/student-why-dino";
import { ThesisNinety } from "@/components/investor/thesis-ninety";
import { SectionHeading } from "@/components/ui/section-heading";
import { CORE_ACTIONS, STUDENT_JOURNEY } from "@/data/journey";
import { DINO_FEATURES, ETHICS, PROBLEM_CARDS } from "@/data/ecosystem-features";
import { HOME_FAQ } from "@/data/home-faq";
import { FaqSection } from "@/components/sections/faq-section";
import { JourneyExplorer } from "@/components/sections/journey-explorer";
import { DigitalTwinViz } from "@/components/sections/digital-twin-viz";
import { DinoMascot } from "@/components/dino/dino-mascot";
import { JennyPreview } from "@/components/dino/jenny-preview";
import { BuildYourDino } from "@/components/sections/build-your-dino";
import { ThesisExplorer } from "@/components/investor/thesis-explorer";
import { ProblemCard } from "@/components/sections/problem-card";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WaitlistBand } from "@/components/sections/waitlist-band";
import { GeoAmbition } from "@/components/sections/geo-ambition";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd, foundersJsonLd } from "@/lib/schema/organization";
import { LeadForm } from "@/components/forms/lead-form";
import { RelatedLinks } from "@/components/navigation/related-links";

const PROBLEM_ICONS = {
  university: GraduationCap,
  career: GitBranch,
  misinfo: Megaphone,
  peers: Users,
  paralysis: Hourglass,
} as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqJsonLd([...HOME_FAQ]), ...foundersJsonLd()]} />
      <HomeHero />
      <CategoryBanner />
      <StudentWhyDino />
      <ThesisNinety />

      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main">
          <SectionHeading
            title="Students don't live inside a syllabus."
            description="They make friendships. Change interests. Question their choices. Compare universities. Search for internships. Worry about careers. Discover communities. Make mistakes. Find opportunities. And slowly figure out who they are."
          />
          <p className="mt-6 max-w-[680px] text-xl font-semibold text-[#111322]">
            Education is information-rich. Student life is intelligence-poor.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEM_CARDS.map((card) => (
              <ProblemCard key={card.id} icon={PROBLEM_ICONS[card.id]} title={card.title} />
            ))}
          </div>
          <Link href="/dino" className="btn-tertiary mt-8">
            See what we&apos;re building →
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="We're building what comes after EdTech." highlight="EdTech" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border border-[#E9E6F2] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#606273]">Traditional EdTech</p>
              <ul className="mt-4 space-y-2 font-semibold text-[#111322]">
                {["Learn", "Test", "Certify", "Graduate"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#6C2BFF]/25 bg-[#F7F3FF] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6C2BFF]">Non-academic ecosystem · Dino</p>
              <ul className="mt-4 grid gap-1 font-semibold text-[#111322] sm:grid-cols-2">
                {STUDENT_JOURNEY.map((s) => (
                  <li key={s.id}>{s.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-2xl font-bold text-[#111322] md:text-3xl">
            Students are more than their academic records.
          </p>
        </div>
      </section>

      <WaitlistBand />

      <section className="section-pad bg-white">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <SectionHeading title="Meet Dino." description="Your Student Digital Twin. Your AI BFF. Your Student World." />
            <p className="mt-6 max-w-[680px] leading-relaxed text-[#606273]">
              The world&apos;s first non-academic student ecosystem — not a chatbot, not a college list. One place for
              the journey school never mapped.
            </p>
            <Link href="/dino" className="btn-primary mt-8">
              Meet Dino →
            </Link>
          </div>
          <DinoMascot className="mx-auto h-44 w-44 md:h-56 md:w-56" />
        </div>
      </section>

      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main">
          <SectionHeading title="Think. Plan. Execute. Decide." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CORE_ACTIONS.map((a) => (
              <div key={a.id} className="card-surface p-6 text-center md:p-8">
                <p className="text-2xl font-extrabold text-[#6C2BFF] md:text-3xl">{a.title}</p>
                <p className="mt-2 text-sm text-[#606273]">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading
            title="Identity → Life"
            description="The non-academic student journey — click each stage to see how Dino thinks."
          />
          <div className="mt-10">
            <JourneyExplorer />
          </div>
          <Link href="/students#waitlist" className="btn-primary mt-10">
            Build your journey →
          </Link>
        </div>
      </section>

      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main">
          <SectionHeading title="One ecosystem. The whole student journey." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DINO_FEATURES.slice(0, 9).map((f) => (
              <Link key={f.title} href={f.href} className="card-surface block p-6">
                <h3 className="text-lg font-bold text-[#111322]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#606273]">{f.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#6C2BFF]">Explore →</span>
              </Link>
            ))}
          </div>
          <Link href="/dino" className="btn-tertiary mt-8">
            View all Dino capabilities →
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Don't just find a college. Find YOURS."
            description="University Explorer is one part of Dino — personalised to your twin, not generic rankings."
          />
          <ul className="grid gap-2 self-center sm:grid-cols-2">
            {["Personalised recommendations", "Compare colleges", "Real student insights", "Fees & placements", "Reviews", "Campus life"].map(
              (i) => (
                <li key={i} className="rounded-[20px] bg-[#F7F3FF] px-4 py-2.5 text-sm font-medium text-[#111322]">
                  {i}
                </li>
              ),
            )}
          </ul>
          <Link href="/dino/university-explorer" className="btn-tertiary lg:col-span-2">
            Explore university intelligence →
          </Link>
        </div>
      </section>

      <section className="section-pad bg-[#080B2A] text-white">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <SectionHeading onDark title="Meet Jenny." description="Your always-on AI companion for the decisions that matter." />
          <JennyPreview />
          <p className="max-w-[680px] text-white/70 lg:col-span-2">
            Jenny uses your student context — not generic prompts — to help you think through plans, comparisons, and next
            steps. Strategist and friend, not a therapist.
          </p>
          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <Link href="/dino/jenny-ai" className="btn-primary">
              Ask Jenny →
            </Link>
            <Link href="/dino/jenny-ai" className="btn-on-dark">
              How Jenny works →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Your Digital Twin helps Dino understand who you're becoming." />
          <div className="mt-10">
            <DigitalTwinViz />
          </div>
          <p className="mt-8 text-lg font-semibold text-[#111322]">Your Digital Twin belongs to you.</p>
          <Link href="/dino/student-digital-twin" className="btn-tertiary mt-4">
            Explore the technology →
          </Link>
        </div>
      </section>

      <TrustStrip />

      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <SectionHeading
            title="Your child shouldn't have to navigate the future alone."
            description="Dino helps students discover, compare, and understand choices — with safety, privacy, and autonomy at the centre."
          />
          <ul className="grid gap-3 self-center sm:grid-cols-2">
            {["Safety", "Privacy", "Transparency", "Student autonomy", "Better decisions", "Future readiness"].map((t) => (
              <li key={t} className="rounded-[20px] border border-[#E9E6F2] bg-white px-4 py-3 text-sm font-semibold">
                {t}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <Link href="/parents" className="inline-flex min-h-[44px] items-center rounded-full bg-[#111322] px-6 text-[15px] font-bold text-white">
              Explore Dino for parents →
            </Link>
            <Link href="/company/ethics" className="btn-secondary">
              Student ethics charter →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0A0A12] text-white">
        <div className="container-main">
          <SectionHeading onDark title="We're not building another EdTech app." description="Shiftup Lab builds infrastructure. Dino is the student experience." />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white">
            {["Student", "Digital Twin", "Intelligence", "Ecosystem", "Network", "Infrastructure"].map((s, i, arr) => (
              <span key={s} className="flex items-center gap-2 text-white">
                {s}
                {i < arr.length - 1 && <span className="text-[#8B3DFF]" aria-hidden>↓</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#C9C5D8]">
            Pre-seed round open · ₹5 Cr · Idea / MVP · No inflated metrics
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ThesisExplorer />
            <BuildYourDino />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/investors/thesis" className="btn-primary">
              View investment thesis →
            </Link>
            <Link href="/investors#deck" className="btn-on-dark">
              Request deck →
            </Link>
            <Link href="/investors/raise" className="btn-on-dark">
              Talk to founders →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Why now?" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "AI", d: "Information is abundant. Context is scarce." },
              { t: "Fragmentation", d: "The student journey lives across dozens of platforms." },
              { t: "Decision complexity", d: "University, careers, skills and opportunities are harder to navigate." },
            ].map((item) => (
              <div key={item.t} className="card-surface p-6">
                <h3 className="text-xl font-bold text-[#6C2BFF]">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#606273]">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[680px] text-xl font-semibold text-[#111322]">
            The next generation of student technology won&apos;t simply deliver information. It will understand the student.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main">
          <SectionHeading
            title="Building for a generation. Building for a nation."
            description="India does not simply have an information problem — it has a student decision problem."
          />
          <div className="mt-6">
            <GeoAmbition />
          </div>
          <p className="mt-6 max-w-[680px] text-[#606273] leading-relaxed">
            Shiftup Lab converts information → context → intelligence → decision — starting in India, built for Asia and
            the world.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Better university decisions",
              "Better career decisions",
              "Reduced misinformation",
              "Stronger peer intelligence",
              "Reduced decision paralysis",
              "More equal access to opportunity",
            ].map((i) => (
              <li key={i} className="rounded-[20px] bg-white px-4 py-3 text-sm font-medium shadow-sm">
                {i}
              </li>
            ))}
          </ul>
          <Link href="/impact" className="btn-tertiary mt-8">
            See our impact thesis →
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main max-w-3xl">
          <SectionHeading
            title="A world where no student navigates the future alone."
            description="To build the intelligence layer that helps every student understand themselves, navigate possibilities, and build a future on their own terms."
          />
          <blockquote className="mt-10 max-w-[680px] border-l-4 border-[#6C2BFF] pl-6 text-lg text-[#606273]">
            <p className="font-semibold text-[#111322]">We believe the student is bigger than the classroom.</p>
            <p className="mt-4">
              Students are not grades. Not applications. Not resumes. Not leads. Not placement numbers. They are people
              becoming people.
            </p>
            <p className="mt-4 font-medium text-[#111322]">Shiftup Lab exists to build technology around that journey.</p>
          </blockquote>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading title="Student first. Always." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ETHICS.map((e) => (
              <div key={e} className="rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] px-4 py-3 text-sm font-semibold">
                {e}
              </div>
            ))}
          </div>
          <Link href="/company/ethics" className="btn-tertiary mt-8">
            Read the student ethics charter →
          </Link>
        </div>
      </section>

      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main grid gap-8 md:grid-cols-2">
          <article className="card-surface p-8">
            <h3 className="text-xl font-bold">Hemanth Kumar S</h3>
            <p className="text-sm font-semibold text-[#6C2BFF]">Founder & Director</p>
            <p className="mt-4 text-sm leading-relaxed text-[#606273]">
              14+ years in education ecosystem development, growth and institutional relationships. MBA — Anna University.
              Pursuing PhD in AI & Educational Technology.
            </p>
          </article>
          <article className="card-surface p-8">
            <h3 className="text-xl font-bold">Jennifer Immanuale</h3>
            <p className="text-sm font-semibold text-[#6C2BFF]">Co-Founder</p>
            <p className="mt-4 text-sm leading-relaxed text-[#606273]">
              2+ years across SaaS, customer success, product, entrepreneurship and user-centric operations — product, UX,
              customer understanding, and AI/product vision.
            </p>
          </article>
        </div>
      </section>

      <WaitlistBand headline="Still scrolling?" subline="Get on the Dino waitlist — we'll reach out when early access opens." />

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="FAQ" />
          <div className="mt-10 max-w-3xl">
            <FaqSection items={HOME_FAQ} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF]" />
        <div className="container-main relative text-center text-white">
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-tight">
            Your future is too important to navigate blindly.
          </h2>
          <p className="mt-4 text-lg">Meet Dino.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/students#waitlist" className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full bg-white px-8 font-bold text-[#6C2BFF] sm:w-auto">
              Join the Dino waitlist →
            </Link>
            <Link href="/investors" className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full border border-white/40 px-8 font-bold text-white sm:w-auto">
              Invest in Shiftup →
            </Link>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section-pad bg-[#F7F3FF]">
        <div className="container-main max-w-xl">
          <SectionHeading title="Join the Dino waitlist" description="Early access for students — idea / MVP, no spam, no fake numbers." />
          <div className="mt-8">
            <LeadForm type="student" />
          </div>
          <RelatedLinks
            links={[
              { href: "/dino", label: "Dino" },
              { href: "/parents", label: "Parents" },
              { href: "/investors/thesis", label: "Investors" },
              { href: "/company", label: "Shiftup Lab" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
