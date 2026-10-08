import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "app");

const pages = [
  ["dino", "Dino | The Non-Academic Student Ecosystem", "Dino is a student digital-twin ecosystem and AI BFF designed to help students navigate identity, community, decisions, opportunities, skills, careers and life.", "Meet Dino"],
  ["dino/student-digital-twin", "Student Digital Twin", "Your evolving, student-owned intelligence model — the core of Dino.", "Explore the Twin"],
  ["dino/jenny-ai", "Jenny AI", "Your always-on AI companion for student decisions — with context, not generic chat.", "Ask Jenny"],
  ["dino/community", "Dino Communities", "Student communities aligned with interests, campuses, and goals.", "Explore Communities"],
  ["dino/university-explorer", "University Explorer", "Don't just find a college. Find YOURS — with intelligence, not rankings alone.", "Explore Universities"],
  ["dino/opportunities", "Opportunities", "Programs, internships, and doors matched to your journey.", "Browse Opportunities"],
  ["dino/career", "Career Intelligence", "Connect skills, interests, and life goals to career paths.", "Explore Careers"],
  ["students", "Students", "Your student life is bigger than your classroom.", "Join Dino"],
  ["parents", "Parents", "Understand how Dino helps students decide with safety and transparency.", "Talk to Shiftup"],
  ["universities", "Universities", "Partner with Shiftup to engage relevant student communities with intelligence.", "Partner With Us"],
  ["partners", "Partners", "Build better student intelligence together.", "Partner With Us"],
  ["investors", "Investors", "Invest in the intelligence layer behind the student ecosystem.", "Request Investor Deck"],
  ["investors/thesis", "Investment Thesis", "Problem, insight, category, and long-term infrastructure opportunity.", "View Thesis"],
  ["investors/market", "Market", "India → Asia → Global student intelligence market architecture.", "Explore Market"],
  ["investors/business-model", "Business Model", "B2C, B2B2C, B2B, and future intelligence infrastructure.", "See Model"],
  ["investors/moat", "Moat", "Digital Twin, graphs, trust, and network effects — beyond AI alone.", "Explore Moat"],
  ["investors/metrics", "Metrics", "Pre-traction dashboard architecture — honest placeholders until launch data.", "View Metrics"],
  ["investors/raise", "Raise", "₹5 Cr pre-seed — idea / MVP stage.", "Request Access"],
  ["investors/data-room", "Data Room", "Qualified investor data room access upon request.", "Request Access"],
  ["company", "Company", "Shiftup Lab — building the intelligence layer for the student ecosystem.", "Our Vision"],
  ["company/vision", "Vision", "A world where no student navigates the future alone.", "Read Vision"],
  ["company/mission", "Mission", "Intelligent, trusted, human-centred student ecosystems.", "Read Mission"],
  ["company/ethics", "Student Ethics Charter", "Student first. Always.", "Read Charter"],
  ["company/team", "Team", "Founders building Dino and Shiftup Lab.", "Meet Founders"],
  ["impact", "Impact", "Better decisions, stronger peer intelligence, more equal access.", "Impact Thesis"],
  ["research", "Research", "Student intelligence research from Shiftup Lab.", "Read Research"],
  ["insights", "Insights", "Student intelligence, careers, universities, and parent guides.", "Browse Insights"],
  ["press", "Press", "News and announcements from Shiftup Lab.", "Contact Press"],
  ["trust", "Trust", "Safety, privacy, and transparency for students and parents.", "Trust Centre"],
  ["security", "Security", "Security practices at Shiftup Lab.", "Security Overview"],
  ["privacy", "Privacy", "Privacy by design for student data.", "Privacy Policy"],
  ["terms", "Terms", "Terms of use for Shiftup Lab and Dino.", "Terms"],
];

const template = (slug, title, description, cta) => {
  const importPath = slug.split("/").length > 1 ? "@/lib/seo/metadata" : "@/lib/seo/metadata";
  const metaTitle = slug.startsWith("dino") && slug === "dino" ? title : `${title}`;
  return `import { createPageMetadata } from "${importPath}";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: ${JSON.stringify(metaTitle)},
  description: ${JSON.stringify(description)},
  path: "/${slug}",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: ${JSON.stringify(title.split("|")[0].trim())},
        description: ${JSON.stringify(description)},
        directAnswer: ${JSON.stringify(description)},
        breadcrumbs: [{ name: ${JSON.stringify(title.split("|")[0].trim())}, path: "/${slug}" }],
        blocks: [
          {
            heading: "Overview",
            body: ${JSON.stringify(description + " Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.")},
          },
        ],
        primaryCta: { label: ${JSON.stringify(cta)}, href: ${JSON.stringify(slug.includes("investor") ? "/investors/raise" : slug === "parents" ? "/parents#contact" : "/students#waitlist")} },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
`;
};

/** Pages with hand-crafted implementations — never overwrite. */
const CUSTOM = new Set([
  "company",
  "company/ethics",
  "dino",
  "dino/jenny-ai",
  "dino/student-digital-twin",
  "students",
  "parents",
  "partners",
  "investors",
  "investors/thesis",
  "investors/metrics",
  "investors/raise",
  "trust",
]);

for (const [slug, title, desc, cta] of pages) {
  if (CUSTOM.has(slug)) continue;
  const dir = path.join(root, ...slug.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), template(slug, title, desc, cta));
}

console.log("Generated", pages.length, "routes");
