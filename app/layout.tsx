import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";

import AuthProvider from "@/app/providers/AuthProvider";
import {Toaster} from "sonner";
import Footer from "@/components/Footer";


export const metadata = {
    title: {
        default: 'PastePlay - Create YouTube Playlists Instantly',
        template: '%s | PastePlay',
    },
    description: 'Paste your song list and instantly generate a YouTube playlist. Sign in with Google to get started. Simple, fast, and free.',
    metadataBase: new URL('https://pasteplay.vercel.app'), // Replace with final domain
    openGraph: {
        title: 'PastePlay - YouTube Playlist Generator',
        description: 'Convert any list of songs into a YouTube playlist using Google login. Fast, secure, and free.',
        url: 'https://pasteplay.vercel.app',
        siteName: 'PastePlay',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PastePlay - Create YouTube Playlists',
        description: 'Paste your list of songs and generate a YouTube playlist instantly.',
        images: ['/og-image.png'],
        creator: '@yourhandle', // optional
    },
    icons: {
        icon: '/favicon.ico',
    },
    keywords: [
        'PastePlay',
        'YouTube Playlist Generator',
        'Paste Songs to Playlist',
        'Google Login Playlist Maker',
        'Auto Playlist from Songs',
    ],
    authors: [{ name: 'Virender Chauhan' }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark bg-black text-slate-200 px-6 sm:px-12 `}
      >
      <AuthProvider>
          <Header/>
          {children}
          <Toaster position="bottom-right"/>
          <Footer/>
      </AuthProvider>

      </body>
    </html>
  );
}
