import { Suspense } from "react";
import { Footer } from "@/components/navigation/footer";
import { Navbar } from "@/components/navigation/navbar";
import { StickyMobileCta } from "@/components/navigation/sticky-mobile-cta";

function NavFallback() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-[#E9E6F2] bg-white/90 backdrop-blur-md" aria-hidden />
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<NavFallback />}>
        <Navbar />
      </Suspense>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <StickyMobileCta />
      </Suspense>
    </>
  );
}
