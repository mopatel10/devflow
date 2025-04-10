"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo2.png";
import localFont from 'next/font/local';
import { Menu } from "lucide-react";

const RoyalBrand = localFont({ src: '../../../public/fonts/RoyalBrand.ttf' })
const Poppins = localFont({ src: '../../../public/fonts/Poppins-Regular.ttf' })

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return(
        <nav className="flex flex-wrap justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-10 bg-[#ebd3bc] shadow-md relative">
            <div className="flex items-center gap-2">
                <Image src={Logo} width={80} height={68} alt="PawPoint Logo" className="w-auto h-8 md:h-12" />
                <h1 className={`${RoyalBrand.className} text-2xl md:text-4xl font-bold text-[#D45D27]`}>PawPoint</h1>
            </div>
            
            {/* Mobile menu button */}
            <button 
                className="md:hidden p-2 text-[#D45D27]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <Menu size={24} />
            </button>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="w-full md:hidden mt-4 pb-3 flex flex-col gap-4">
                    <a href="#features" className="hover:text-[#D45D27] transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-[#D45D27] transition-colors">Link</a>
                    <a href="#pricing" className="hover:text-[#D45D27] transition-colors">Link</a>
                    <a href="#testimonials" className="hover:text-[#D45D27] transition-colors">Link</a>
                    <button className="mt-2 px-4 py-2 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors w-full">
                        Sign Up
                    </button>
                </div>
            )}
            
            {/* Desktop menu */}
            <div className={`${Poppins.className} hidden md:flex gap-4 lg:gap-8 font-medium`}>
                <a href="#features" className="hover:text-[#D45D27] transition-colors">Features</a>
                <a href="#how-it-works" className="hover:text-[#D45D27] transition-colors">Link</a>
                <a href="#pricing" className="hover:text-[#D45D27] transition-colors">Link</a>
                <a href="#testimonials" className="hover:text-[#D45D27] transition-colors">Link</a>
            </div>
            
            <div className="flex gap-2 md:gap-4">
                <button className="px-3 py-1 md:px-4 md:py-2 border-2 border-[#D45D27] text-[#D45D27] font-semibold rounded-full hover:bg-[#D45D27] hover:text-white transition-colors text-sm md:text-base">
                    Login
                </button>
                <button className="px-3 py-1 md:px-4 md:py-2 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors hidden md:block text-sm md:text-base">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}