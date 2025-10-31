import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "StudySphere",
    description: "Track and visualize your study progress efficiently.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <header className="bg-primary text-black p-4 text-center font-semibold shadow-md">
                        StudySphere
                    </header>
                    <main className="flex-1 container mx-auto p-6">{children}</main>
                    <footer className="text-center text-sm text-gray-500 p-4">``
                        © {new Date().getFullYear()} StudySphere
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
