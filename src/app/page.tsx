import { Metadata } from "next";
import { Hero } from "@/components/sections/it/Hero";
import { Services } from "@/components/sections/it/Services";
import { WhyChooseUs } from "@/components/sections/it/WhyChooseUs";
import { Portfolio } from "@/components/sections/it/Portfolio";
import { Industries } from "@/components/sections/it/Industries";
import { Testimonials } from "@/components/sections/it/Testimonials";
import { CTA } from "@/components/sections/it/CTA";
import { TechStack } from "@/components/sections/it/TechStack";
import { Process } from "@/components/sections/it/Process";
import { FAQ } from "@/components/sections/it/FAQ";

export const metadata: Metadata = {
  title: "Epsilon Technology | Web Development Company USA, UK & UAE",
  description: "Epsilon Technology provides premium web & mobile app development services for businesses in the USA, UK, UAE, and Canada. Hire expert developers today.",
  keywords: [
    "Web Development Company USA",
    "Mobile App Development Services",
    "Ecommerce Developers for Hire",
    "Custom Software Development Agency UK",
    "Mobile App Developers Canada",
    "Web Development Company UAE",
    "React Native Development",
    "Next.js Experts",
    "Global IT Services"
  ],
  openGraph: {
    title: "Epsilon Technology | Premium IT Services Globally",
    description: "Building scalable digital products for businesses in USA, UK, UAE & Canada.",
    images: ["/logo.png"],
  }
};

import { PainPoints } from "@/components/sections/it/PainPoints";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <TechStack />
      <Services />
      <Process />
      <WhyChooseUs />
      <Industries />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
