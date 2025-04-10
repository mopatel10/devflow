"use client";
import Image, { type StaticImageData } from "next/image";

type PhoneMockupProps = {
  image: StaticImageData;
  alt?: string;
  className?: string;
};

export default function PhoneMockup({ image, alt = "Phone Screenshot", className = "" }: PhoneMockupProps) {
  return (
    <figure className={`mx-auto max-w-full w-40 sm:w-48 md:w-60 h-auto ${className}`}>
      <div className="phone-mockup relative">
        <img 
          src={image.src} 
          alt={alt} 
          className="phone-image w-full h-auto rounded-xl shadow-lg" 
        />
      </div>
    </figure>
  );
}