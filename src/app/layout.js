import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../components/AuthContext";
import { SocketProvider } from "../components/SocketContext";
import { NotificationProvider } from "../components/NotificationContext";
import ErrorBoundary from "../components/ErrorBoundary";
import NotificationPanel from "../components/NotificationPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MedPredict AI - Predictive Healthcare Analytics",
    template: "%s | MedPredict AI"
  },
  description: "Transform patient data into proactive care decisions with explainable AI. Reduce readmissions by 25% and improve outcomes with intelligent predictions.",
  keywords: [
    "healthcare AI",
    "predictive analytics",
    "medical AI",
    "healthcare technology",
    "clinical decision support",
    "patient care",
    "medical predictions",
    "healthcare analytics"
  ],
  authors: [{ name: "MedPredict AI Team" }],
  creator: "MedPredict AI",
  publisher: "MedPredict AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medpredict.ai",
    siteName: "MedPredict AI",
    title: "MedPredict AI - Predictive Healthcare Analytics",
    description: "Transform patient data into proactive care decisions with explainable AI. Reduce readmissions by 25% and improve outcomes with intelligent predictions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedPredict AI - Predictive Healthcare Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedPredict AI - Predictive Healthcare Analytics",
    description: "Transform patient data into proactive care decisions with explainable AI.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ErrorBoundary>
          <AuthProvider>
            <SocketProvider>
              <NotificationProvider>
                <Navbar />
                <main className="mx-auto max-w-7xl px-6">{children}</main>
                <NotificationPanel />
              </NotificationProvider>
            </SocketProvider>
          </AuthProvider>
        </ErrorBoundary>
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
