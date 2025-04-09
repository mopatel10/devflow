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
    <section id="features" className="py-12 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#D45D27] mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#F4D7B6] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4">
              <Image
                src={feature.imageSrc}
                alt={feature.alt}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold my-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
