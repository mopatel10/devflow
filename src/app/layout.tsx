import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { TRPCReactProvider } from "~/trpc/react";

// local fonts
const RoyalBrand = localFont({
	src: "../../public/fonts/RoyalBrand.ttf",
	variable: "--font-royalbrand",
	display: "swap",
});

const Poppins = localFont({
	src: "../../public/fonts/Poppins-Regular.ttf",
	variable: "--font-poppins",
	display: "swap",
});

// google font
const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export const metadata: Metadata = {
	title: "PawPoint",
	description:
		"Keep tabs on your furry friends with PawPoint, the ultimate pet tracking and care management app for passionate pet parents",
	icons: [{ rel: "icon", url: "/tab-logo.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${geist.variable} ${Poppins.variable} ${RoyalBrand.variable}`}
		>
			<body>
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}
