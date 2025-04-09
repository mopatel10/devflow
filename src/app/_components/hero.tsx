"use client"
import { useState } from "react";
import Image from "next/image";
import AppleLogo from "../../../public/app-store-icon.png"
import PlayStore from "../../../public/google-play-icon.png";
import localFont from 'next/font/local';

const RoyalBrand = localFont({ src: '../../../public/fonts/RoyalBrand.ttf' })
const Poppins = localFont({ src: '../../../public/fonts/Poppins-Regular.ttf' })

export default function HeroSection(){
    const [email, setEmail] = useState("");
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);

    return(
        <div className="md:w-1/2">
        <h2 className={`${RoyalBrand.className} text-4xl md:text-5xl font-bold text-[#D45D27] mb-4`}>Track Your Pet's Adventures</h2>
          <p className={`${Poppins.className} text-lg mb-6`}>Keep tabs on your furry friends with PawPoint, the ultimate pet tracking and care management app for passionate pet parents.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              className="px-6 py-3 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors"
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
            >
              Download App
            </button>
            <button className="px-6 py-3 border-2 border-[#D45D27] text-[#D45D27] font-semibold rounded-full hover:bg-[#edbea4] transition-colors">
              Learn More
            </button>
          </div>
          
          {showDownloadOptions && (
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <p className="font-medium mb-1">Get the PawPoint app:</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
                  <Image 
                    src={AppleLogo}
                    alt="App Store" 
                    width={20} 
                    height={24} 
                  />
                  App Store
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
                  <Image 
                    src={PlayStore}
                    alt="Google Play" 
                    width={20} 
                    height={24} 
                  />
                  Google Play
                </button>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-full bg-[#E7C6A5] border-2 border-[#D45D27] placeholder-[#996633] text-[#5C3D2E] flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-4 py-2 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors">
              Get Updates
            </button>
          </div>
          <h3 className="text-sm text-gray-600"> We care about your data in our{" "}
            <span className={`${Poppins.className} underline text-[#D45D27] hover:text-[#bc4a1d] cursor-pointer py-3`}>
              privacy policy
            </span>
          </h3>
          </div>
        )}