export const dynamic = "force-dynamic";

import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: slug.replace(/-/g, " "),
    description: "Shiftup Lab insights — student intelligence, careers, and university decisions.",
    path: `/insights/${slug}`,
    ogType: "article",
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");

  return (
    <article className="section-pad">
      <div className="container-main max-w-3xl">
        <p className="text-sm font-semibold text-[#6C2BFF]">Insights</p>
        <h1 className="mt-2 text-4xl font-extrabold capitalize text-[#111322]">{title}</h1>
        <p className="mt-4 text-lg text-[#606273]">
          <strong>Direct answer:</strong> Article template for SEO/AEO — hook, semantic answer, structured proof, FAQ, and related entities.
        </p>
        <section className="mt-10 prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className="text-[#606273]">Content hub architecture for Student Intelligence, University Decisions, Career Decisions, and more.</p>
          <h2 className="mt-8 text-2xl font-bold">FAQ</h2>
          <dl>
            <dt className="font-semibold">Who is this for?</dt>
            <dd className="mb-4 text-[#606273]">Students, parents, and partners exploring student intelligence.</dd>
          </dl>
        </section>
        <Link href="/students#waitlist" className="mt-10 inline-flex rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] px-6 py-3 font-bold text-white">
          Join Dino →
        </Link>
      </div>
    </article>
  );
}
