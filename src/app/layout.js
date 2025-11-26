import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hasanul Haque Shiblu",
  description: "Hasanul Haque Shiblu is a software engineer with a passion for building web applications.",
  keywords: "Hasanul Haque Shiblu, software engineer, web developer, portfolio, blog, contact",
  author: "Hasanul Haque Shiblu",
  creator: "Hasanul Haque Shiblu",
  publisher: "Hasanul Haque Shiblu",
  openGraph: {
    title: "Hasanul Haque Shiblu",
    description: "Hasanul Haque Shiblu is a software engineer with a passion for building web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasanul Haque Shiblu",
    description: "Hasanul Haque Shiblu is a software engineer with a passion for building web applications.",
    images: ["/images/hero1.png"],
  },
  icons: {
    icon: [
      { url: "/images/hero1.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/hero1.png",
    apple: "/images/hero1.png",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  backgroundColor: "#000000",
  appleWebApp: {
    title: "Hasanul Haque Shiblu",
    description: "Hasanul Haque Shiblu is a software engineer with a passion for building web applications.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://shiblu.vercel.app",
  },
  verification: {
    google: "google-site-verification=1234567890",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/images/hero1.png",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tap-highlight": "no",
    "msapplication-navbutton-color": "#000000",
    "msapplication-starturl": "/",
    "msapplication-window-color": "#000000",
    "msapplication-task-color": "#000000",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
