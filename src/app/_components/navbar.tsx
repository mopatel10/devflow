"use client"
import Image from "next/image";
import Logo from "../../../public/logo2.png";
import localFont from 'next/font/local';

const RoyalBrand = localFont({ src: '../../../public/fonts/RoyalBrand.ttf' })
const Poppins = localFont({ src: '../../../public/fonts/Poppins-Regular.ttf' })

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-6 py-4 md:px-1  xl:p-5 bg-[#ebd3bc] shadow-md">
            <div className="flex items-center gap-2">
                <Image src={Logo} width={100} height={85} alt="PawPoint Logo" />
                <h1 className={`${RoyalBrand.className}  text-4xl font-bold text-[#D45D27]`}>PawPoint</h1>
            </div>
            <div className={`${Poppins.className}  hidden md:flex gap-8 font-medium`}>
                <a href="#features" className="hover:text-[#D45D27] transition-colors">Features</a>
                <a href="#how-it-works" className="hover:text-[#D45D27] transition-colors">Link</a>
                <a href="#pricing" className="hover:text-[#D45D27] transition-colors">Link</a>
                <a href="#testimonials" className="hover:text-[#D45D27] transition-colors">Link</a>
            </div>
            <div className="flex gap-4">
                <button className="px-4 py-2 border-2 border-[#D45D27] text-[#D45D27] font-semibold rounded-full hover:bg-[#D45D27] hover:text-white transition-colors">
                    Login
                </button>
                <button className="px-4 py-2 bg-[#D45D27] text-white font-semibold rounded-full hover:bg-[#bc4a1d] transition-colors hidden md:block">
                    Sign Up
                </button>
            </div>
        </nav>
)}