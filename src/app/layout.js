import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../components/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MedPredict AI",
  description: "Predictive insights for healthcare powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <AuthProvider>
          <Navbar />
          <main className="mx-auto max-w-7xl px-6">{children}</main>
        </AuthProvider>
        <footer className="mt-16 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-black/60 dark:text-white/60 flex items-center justify-between">
            <p>© {new Date().getFullYear()} MedPredict AI</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
