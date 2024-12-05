import localFont from "next/font/local";
import "./globals.css";
import SparklesIcon from "./components/SparklesIcon";
import Link from "next/link";

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

export const metadata = {
  title: "Magic Captions",
  description: "Generates captions for your Videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white`}
      >
        <main className="p-4 mx-auto max-w-2xl">
          <header className="flex justify-between my-8">
        <Link className="flex gap-1" href="/">
          <SparklesIcon/>
          <span>EpicCaptions</span>
        </Link>
        <nav className="flex gap-6 text-white/90">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <a href="mailto:needlesscushion2gmail.com">Contact</a>
        </nav>
      </header>
        {children}
        </main>
      </body>
    </html>
  );
}
