"use client";
import Image from "next/image";
import Logo from "../../../public/logo2.png";

const features = [
  {
    title: "Pet Profiles",
    description: "Create detailed profiles for each of your pets with medical history, dietary needs, and more.",
    imageSrc: Logo, 
    alt: "Pet Profiles Icon"
  },
  {
    title: "GPS Tracking",
    description: "Know where your pets are at all times with real-time GPS tracking and location history.",
    imageSrc: Logo, 
    alt: "GPS Tracking Icon"
  },
  {
    title: "Health Reminders",
    description: "Never miss a vet appointment or medication dose with customizable reminders and notifications.",
    imageSrc: Logo,
    alt: "Health Reminders Icon"
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-10 md:py-12 px-4 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#D45D27] mb-6 md:mb-12">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#F4D7B6] p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4">
              <Image
                src={feature.imageSrc}
                alt={feature.alt}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold my-1 md:my-2">{feature.title}</h3>
            <p className="text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}