import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { RelatedLinks } from "@/components/navigation/related-links";
import { cn } from "@/lib/utils";

type Block = {
  heading?: string;
  body?: string;
  bullets?: string[];
};

export type MarketingPageContent = {
  eyebrow?: string;
  title: string;
  description: string;
  highlight?: string;
  breadcrumbs?: { name: string; path: string }[];
  /** AEO: plain-language answer block (no template label). */
  directAnswer?: string;
  blocks?: Block[];
  faq?: { question: string; answer: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  related?: { href: string; label: string }[];
};

export function MarketingPage({ content }: { content: MarketingPageContent }) {
  return (
    <article className="section-pad">
      <div className="container-main max-w-3xl">
        {content.breadcrumbs && <Breadcrumbs items={content.breadcrumbs} />}
        <SectionHeading title={content.title} highlight={content.highlight} description={content.description} eyebrow={content.eyebrow} />
        {content.directAnswer && (
          <p className="mt-8 max-w-[680px] rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] p-6 text-lg leading-relaxed text-[#111322]">
            {content.directAnswer}
          </p>
        )}
        {content.blocks?.map((block) => (
          <section key={block.heading ?? block.body} className="mt-12 max-w-[680px]">
            {block.heading && <h2 className="text-2xl font-bold text-[#111322]">{block.heading}</h2>}
            {block.body && <p className="mt-3 text-[#606273] leading-relaxed">{block.body}</p>}
            {block.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[#606273]">
                {block.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {content.faq && content.faq.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <dl className="mt-6 space-y-6">
              {content.faq.map((f) => (
                <div key={f.question}>
                  <dt className="font-semibold text-[#111322]">{f.question}</dt>
                  <dd className="mt-2 text-[#606273]">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        <div className="mt-12 flex flex-wrap gap-3">
          {content.primaryCta && (
            <Link href={content.primaryCta.href} className="btn-primary">
              {content.primaryCta.label}
            </Link>
          )}
          {content.secondaryCta && (
            <Link href={content.secondaryCta.href} className={cn("btn-secondary")}>
              {content.secondaryCta.label}
            </Link>
          )}
        </div>
        <RelatedLinks links={content.related} />
      </div>
    </article>
  );
}
