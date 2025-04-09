"use client";
import Image, {type StaticImageData } from "next/image";

type PhoneMockupProps = {
  image: StaticImageData;
  alt?: string;
  className?: string;
};

export default function PhoneMockup({ image, alt = "Phone Screenshot", className = "" }: PhoneMockupProps) {
  return (
    <figure className={`mx-auto max-w-full w-60 h-auto ${className}`}>
      <div className="phone-mockup">
        <img src={image.src} alt={alt} className="phone-image" />
      </div>
    </figure>
  );
}
