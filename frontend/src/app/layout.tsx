import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/app/Providers";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Beyoglu AI",
	description:
		"Beyoglu AI helps you make images, videos, musics, and write code with AI.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<ToastContainer />

					{children}
				</Providers>
			</body>
		</html>
	);
}

