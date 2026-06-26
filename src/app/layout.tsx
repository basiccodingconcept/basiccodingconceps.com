import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.basiccodingconcepts.online"),
  title: "Basic Coding Concepts | Learn Programming Fundamentals & Coding Basics",
  description: "Master coding fundamentals the fun, interactive, and visual way. Learn variables, loops, functions, and arrays with real-time browser practice.",
  keywords: "coding basics, programming fundamentals, learn coding, variables, loops, functions, programming for beginners, python basics, javascript basics",
  alternates: {
    canonical: "https://www.basiccodingconcepts.online",
  },
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
    title: "Basic Coding Concepts | Learn Programming Fundamentals",
    description: "Master coding fundamentals the fun, interactive, and visual way. Learn variables, loops, functions, and arrays with real-time browser practice.",
    url: "https://www.basiccodingconcepts.online",
    siteName: "Basic Coding Concepts",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Basic Coding Concepts - Learn Programming Fundamentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basic Coding Concepts | Learn Programming Fundamentals",
    description: "Master coding fundamentals the fun, interactive, and visual way.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.basiccodingconcepts.online/#website",
        "url": "https://www.basiccodingconcepts.online",
        "name": "Basic Coding Concepts",
        "description": "Master coding fundamentals the fun, interactive, and visual way.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.basiccodingconcepts.online/concepts?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.basiccodingconcepts.online/#organization",
        "name": "Basic Coding Concepts",
        "url": "https://www.basiccodingconcepts.online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.basiccodingconcepts.online/og-image.png",
          "width": 1200,
          "height": 630
        },
        "sameAs": [],
        "description": "Free interactive platform to learn programming fundamentals including variables, loops, functions, and arrays.",
        "knowsAbout": [
          "Programming",
          "Coding",
          "Computer Science",
          "JavaScript",
          "Python",
          "Web Development"
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DHPEMCXZ1B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DHPEMCXZ1B');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
