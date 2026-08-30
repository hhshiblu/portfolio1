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
  }


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
