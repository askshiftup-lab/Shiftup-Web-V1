"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EcosystemOrbit } from "@/components/dino/ecosystem-orbit";
import { Button } from "@/components/ui/button";
import { GeoAmbition } from "@/components/sections/geo-ambition";
import { trackEvent } from "@/lib/analytics";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 text-[#111322] md:pt-16 md:pb-20">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#6C2BFF]/12 blur-3xl" />
      <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6C2BFF]">Shiftup Lab Private Limited</p>
          <h1 className="mt-3 text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-[#111322]">
            The intelligence layer for the world&apos;s{" "}
            <span className="gradient-text">student ecosystem</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-[#111322]">
            Dino is your Student Digital Twin & AI BFF — for everything school doesn&apos;t cover.
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[#606273]">
            Think, plan, execute, and decide across friends, colleges, communities, skills, careers, and life — in one
            non-academic ecosystem.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="min-h-[48px] w-full sm:w-auto">
              <Link href="/students#waitlist" onClick={() => trackEvent("hero_cta_click", { cta: "waitlist" })}>
                Join the waitlist <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button variant="secondary" asChild size="lg" className="min-h-[48px] w-full sm:w-auto">
              <Link href="/dino" onClick={() => trackEvent("dino_cta_click", { source: "hero" })}>
                Meet Dino
              </Link>
            </Button>
            <Button variant="link" asChild className="min-h-[44px] justify-start sm:justify-center">
              <Link href="/investors/thesis">Investment thesis →</Link>
            </Button>
          </div>
          <div className="mt-8 space-y-3">
            <GeoAmbition />
            <p className="text-xs text-[#606273]">
              Built in Bengaluru · Student-first · Pre-traction MVP —{" "}
              <Link href="/company/ethics" className="font-semibold text-[#6C2BFF] underline-offset-2 hover:underline">
                ethics charter
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:pl-4">
          <EcosystemOrbit />
          <p className="mt-4 text-center text-xs text-[#606273] lg:text-left">
            One ecosystem: Identity → Life · Powered by Shiftup Lab
          </p>
        </div>
      </div>
    </section>
  );
}
