import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Doctor Social Media Growth & Marketing | Epsilon Technology",
  description: "Transform your medical practice with Epsilon Technology's patient acquisition strategies. We help doctors and clinics grow their social media presence and get more appointments.",
  keywords: ["Doctor Marketing", "Medical Social Media", "Clinic Growth", "Patient Acquisition", "Healthcare Marketing Agency"],
  openGraph: {
    title: "Doctor Social Media Growth & Marketing",
    description: "Transform your medical practice with Epsilon Technology's patient acquisition strategies.",
  }
};
import { IsThisForYou } from "@/components/sections/IsThisForYou";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { DoctorsWeWorkWith } from "@/components/sections/DoctorsWeWorkWith";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <IsThisForYou />
      <Problem />
      <Solution />
      <HowItWorks />
      <Results />
      <DoctorsWeWorkWith />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Booking />
    </>
  );
}
