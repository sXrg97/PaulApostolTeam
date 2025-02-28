import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollToTopButton } from "./(components)/ScrollToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paul Apostol - Antrenor Personal & Specialist în Nutriție",
  description: "Ghidul tău personalizat către o viață sănătoasă și activă. Transformă-ți corpul și obiceiurile cu planuri de nutriție și antrenamente adaptate nevoilor tale.",
  
  // Open Graph / Facebook metadata
  openGraph: {
    type: "website",
    title: "Paul Apostol - Antrenor Personal & Specialist în Nutriție",
    description: "Ghidul tău personalizat către o viață sănătoasă și activă. Transformă-ți corpul și obiceiurile cu planuri de nutriție și antrenamente adaptate nevoilor tale.",
    images: [
      {
        url: "/paul_apostol_logo_white.png",
        width: 1200,
        height: 630,
        alt: "Paul Apostol Logo"
      }
    ],
    siteName: "Paul Apostol"
  },
  
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Paul Apostol - Antrenor Personal & Specialist în Nutriție",
    description: "Ghidul tău personalizat către o viață sănătoasă și activă. Transformă-ți corpul și obiceiurile cu planuri de nutriție și antrenamente adaptate nevoilor tale.",
    images: ["/paul_apostol_logo_white.png"],
    // creator: "@paulapostol"
  },
  
  icons: {
    icon: [
      { url: '/favicon_white.ico' }
    ],
    apple: [
      { url: '/paul_apostol_apple_logo_white.png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
