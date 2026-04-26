import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { RecalibrationOverlay } from "@/components/layout/RecalibrationOverlay";
import { OfflineIndicator } from "@/components/layout/OfflineIndicator";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNMAPPED | Infrastructure for Youth Opportunity",
  description: "Connecting youth skills to economic opportunities in LMICs through data-driven infrastructure.",
};

import { VoiceAssistance } from "@/components/layout/VoiceAssistance";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-jakarta" suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AppProvider>
            <Navbar />
            <RecalibrationOverlay />
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <Footer />
            <OfflineIndicator />
            <VoiceAssistance />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
