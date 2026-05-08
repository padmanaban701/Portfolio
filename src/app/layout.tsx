import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PadhuPort | State of the Art Portfolio",
  description: "A premium portfolio showcasing high-performance web applications and digital experiences.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Next.js", "TypeScript", "UI/UX Design"],
  authors: [{ name: "Padmanaban" }],
  openGraph: {
    title: "PadhuPort | Portfolio",
    description: "Building the future of digital experiences.",
    type: "website",
  }
};

import { AnimationProvider } from "@/providers/AnimationProvider";
import MouseFollower from "@/components/MouseFollower";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AnimationProvider>
          <MouseFollower />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
