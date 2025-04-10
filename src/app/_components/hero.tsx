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
        <div className="w-full md:w-1/2">
            <h2 className={`${RoyalBrand.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#D45D27] mb-3 md:mb-4`}>Track Your Pet's Adventures</h2>
            <p className={`${Poppins.className} text-base md:text-lg mb-4 md:mb-6`}>Keep tabs on your furry friends with PawPoint, the ultimate pet tracking and care management app for passionate pet parents.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <button 
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors text-sm md:text-base"
                    onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                >
                    Download App
                </button>
                <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#D45D27] text-[#D45D27] font-semibold rounded-full hover:bg-[#edbea4] transition-colors text-sm md:text-base">
                    Learn More
                </button>
            </div>
            
            {showDownloadOptions && (
                <div className="bg-white p-3 md:p-4 rounded-lg shadow-md mb-5 md:mb-6">
                    <p className="font-medium mb-1 text-sm md:text-base">Get the PawPoint app:</p>
                    <div className="flex flex-col xs:flex-row gap-2 md:gap-4">
                        <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded-lg text-xs md:text-sm">
                            <Image 
                                src={AppleLogo}
                                alt="App Store" 
                                width={16} 
                                height={20} 
                                className="w-4 h-5 md:w-5 md:h-6"
                            />
                            App Store
                        </button>
                        <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-black text-white rounded-lg text-xs md:text-sm">
                            <Image 
                                src={PlayStore}
                                alt="Google Play" 
                                width={16} 
                                height={20}
                                className="w-4 h-5 md:w-5 md:h-6"
                            />
                            Google Play
                        </button>
                    </div>
                </div>
            )}
            
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-3 md:px-4 py-2 rounded-full bg-[#E7C6A5] border-2 border-[#D45D27] placeholder-[#996633] text-[#5C3D2E] w-full sm:flex-grow text-sm md:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="px-3 md:px-4 py-2 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors mt-2 sm:mt-0 w-full sm:w-auto text-sm md:text-base">
                    Get Updates
                </button>
            </div>
            <h3 className="text-xs md:text-sm text-gray-600 mt-2"> 
                We care about your data in our{" "}
                <span className={`${Poppins.className} underline text-[#D45D27] hover:text-[#bc4a1d] cursor-pointer`}>
                    privacy policy
                </span>
            </h3>
        </div>
    );
}