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

      {/* hero page */}
      <section className="py-10 md:py-20 px-4 md:px-16">
       
        <div className="hidden md:flex md:flex-row md:gap-8 md:items-center">
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
                className="relative z-10 transform translate-y-8"
              />
            </div>
          </div>
        </div>
        
        {/* for mobile screens: stacked layout */}
        <div className="flex flex-col gap-8 md:hidden">
          <HeroSection />
          
          <div className="flex justify-center">
            <div className="flex flex-row items-end gap-4 scale-90">
              {/* first Phone Mockup */}
              <PhoneMockup 
                image={Phone1}
                alt="PawPoint screen 1" />

              {/* second Phone Mockup (hidden on very small screens) */}
              <PhoneMockup
                image={Phone2}
                alt="PawPoint screen 2"
                className="relative z-10 hidden sm:block"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features page */}
      <FeaturesSection />
    </div>
  );
}