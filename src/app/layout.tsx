import './globals.css';
import Head from 'next/head';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'My Digital CV',
  description: 'An interactive CV',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>Min Digitale CV</title>
        <meta name="description" content="Dette er min digitale CV, bygget med Next.js." />

        {/* Open Graph Meta Tags for Facebook/LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Min Digitale CV" />
        <meta property="og:description" content="Utforsk mine ferdigheter, arbeidserfaring og prosjekter." />
        <meta property="og:image" content="https://cv.madsens.dev/preview.png" />
        <meta property="og:url" content="https://cv.madsens.dev" />
        <meta property="og:site_name" content="Min Digitale CV" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Min Digitale CV" />
        <meta name="twitter:description" content="Utforsk mine ferdigheter, arbeidserfaring og prosjekter." />
        <meta name="twitter:image" content="https://cv.madsens.dev/preview.png" />
        <meta name="twitter:url" content="https://cv.madsens.dev" />
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}