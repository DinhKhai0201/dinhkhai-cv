import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KHAI NGUYEN",
  description: "Web/Mobile/Blockchain developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <meta name="rating" content="general" key="rating" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta
          name="author"
          content=""
          key="author"
        />
        <meta property="og:title" content="Next JS Boilerplate" key="title" />
        <meta
          name="description"
          content="Solana wallet"
          key="description"
        />
        <meta
          property="og:url"
          content="https://github.com"
          key="url"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/dev-libraries.jpg"
          key="image"
        />
        <meta property="og:image:type" content="image/jpeg" key="image:type" />
        <meta property="og:image:width" content="1200" key="image:width" />
        <meta property="og:image:height" content="630" key="image:height" />
        <meta
          property="og:image:alt"
          content="Solana wallet"
          key="image:alt"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/favicon-180.png"
          key="apple"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon-192.png"
          key="android"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-180.png"
          key="favicon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon-128.png"
          key="icon128"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180.png"
          key="icon180"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192.png"
          key="icon192"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
