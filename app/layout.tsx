import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from '@/app/components/layout/index';
import StoreProvider from '@/app/provider/StoreProvider';
import { Toaster } from "@/components/ui/index";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff'
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'E-Commerce Site - Your Online Shopping Destination',
    template: '%s | E-Commerce Site'
  },
  description: 'Shop the best products online with our e-commerce platform. Browse categories, filter by price, and find great deals on electronics, fashion, and more.',
  keywords: ['e-commerce', 'online shopping', 'buy products', 'electronics', 'fashion', 'deals'],
  authors: [{ name: 'E-Commerce Site' }],
  creator: 'E-Commerce Site',
  publisher: 'E-Commerce Site',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'E-Commerce Site',
    title: 'E-Commerce Site - Your Online Shopping Destination',
    description: 'Shop the best products online with our e-commerce platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Site'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Site - Your Online Shopping Destination',
    description: 'Shop the best products online with our e-commerce platform.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <StoreProvider>
          {children}
        </StoreProvider>
        <Toaster position="top-right" offset="80px" theme="light" />
      </body>
    </html>
  );
}
