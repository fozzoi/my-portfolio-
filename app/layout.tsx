// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load our new modern fonts
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space" // For headings
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" // For body text
});

export const metadata: Metadata = {
  title: "Dev Portfolio | App & Web Developer",
  description: "Computer Engineering Diploma graduate specializing in high-performance apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply the font variables to the body */}
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} font-sans bg-white text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}