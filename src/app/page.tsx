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
  title: "Epsilon Technology | Premium IT Services & Mobile App Development",
  description: "Epsilon Technology helps global businesses build scalable mobile apps, websites, and AI solutions. Expert IT services for innovative startups and enterprises.",
  keywords: ["IT Services", "Mobile App Development Company", "Ecommerce Website Development", "Web App Development", "AI Mobile App Development", "React Native", "Next.js", "Global Clients", "US Startup Developer"],
  openGraph: {
    title: "Epsilon Technology | Premium IT Services",
    description: "Building scalable digital products for global businesses.",
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
