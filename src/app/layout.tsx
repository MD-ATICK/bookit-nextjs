import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] })


export const metadata: Metadata = {
  applicationName: `${process.env.NEXT_WEB_NAME}`,
  title: process.env.NEXT_WEB_TITLE,
  description: process.env.NEXT_WEB_DESCRIPTION,
  keywords: ['bookplus', 'BookPlus', 'Book Plus', 'book plus', 'bookplus vercel app', 'BookPlus vercel app', 'best hotel for couples in chittagong', 'Best hotel for couples in Chittagong', 'best hotel for couples in chittagong city'],
  icons: {
    icon: '/favicon.ico', // favicon for the website
  },
  openGraph: {
    siteName: process.env.NEXT_WEB_NAME,
    title: process.env.NEXT_WEB_TITLE,
    description: process.env.NEXT_WEB_DESCRIPTION,
    url: ` ${process.env.NEXT_PUBLIC_URL}`,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/openGraph.jpg`,
        width: 1200,
        height: 630,
        alt: process.env.NEXT_WEB_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_WEB_TITLE,
    description: process.env.NEXT_WEB_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_URL}/twitter.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}`} />
        <meta name="google-site-verification" content="6GmT2Do1lN7VtwEFDc82A70PsvPJHHw07NtB75FFIew" />
      </head>
      <body
        className={`${montserrat.className} antialiased container mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
