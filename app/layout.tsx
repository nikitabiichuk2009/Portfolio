import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const calculateAge = (birthDate: string) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

const age = calculateAge("2009-06-30");
const desc = `A ${age}-year old web developer.`;
export const metadata: Metadata = {
  title: "Nikita Biichuk's Portfolio",
  description: desc,
  icons: {
    icon: "/avatar.png",
  },
  openGraph: {
    title: "Nikita Biichuk's Portfolio",
    description: desc,
    url: "https://nikita-biichuks-portfolio.vercel.app",
    siteName: "Nikita Biichuk's Dev Portfolio",
    images: [
      {
        url: "/avatar.png",
        alt: "Nikita Biichuk",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@nikitabiichuk",
    creator: "@nikitabiichuk",
    title: "Nikita Biichuk's Dev Portfolio",
    description: desc,
    images: ["/avatar.png"],
  },
  keywords: ["Nikita Biichuk", "Nikita Biichuk's Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
