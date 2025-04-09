"use client"

import FeaturesSection from "./_components/featureSection";
import PhoneMockup from "./_components/phoneMockup";
import Navbar from "./_components/navbar";
import HeroSection from "./_components/hero";
import Phone1 from "../../public/phone-1.jpg";
import Phone2 from "../../public/phone-2.jpg";

export default function PawPointLanding() {

  return (
    <div className="min-h-screen bg-[#F4D7B6] text-[#5C3D2E]">
      <Navbar />

      {/* main area */}
      <section className="py-12 px-6 md:px-16 flex flex-col md:flex-row gap-8 items-center">
        <HeroSection />
        
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-row items-end gap-8">
            {/* first Phone Mockup */}
            <PhoneMockup 
              image={Phone1}
              alt="PawPoint screen 1" />

            {/* second Phone Mockup */}
            <PhoneMockup
              image={Phone2}
              alt="PawPoint screen 2"
              className="relative z-10 transform md:translate-y-8"
            />
          </div>
      </div>
      
      </section>
      <FeaturesSection />
    </div>
  );
}