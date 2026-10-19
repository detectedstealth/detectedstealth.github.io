import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bruce Wade | Principal Systems & Software Engineer • Python • Mobile Architecture • Automation',
  description:
    'Systems architecture portfolio for Bruce Wade: Specializing in high-throughput Python backends, native mobile architecture (iOS/Android), CI/CD pipeline automation, and cloud-native observability.',
  keywords: [
    'Bruce Wade',
    'Principal Systems Engineer',
    'Python Backend',
    'FastAPI',
    'Django',
    'Celery',
    'Mobile Architecture',
    'Swift',
    'SwiftUI',
    'Kotlin',
    'CI/CD Automation',
    'GitHub Actions',
    'Jenkins',
    'OpenTelemetry',
    'Warply Designed Inc'
  ],
  authors: [{ name: 'Bruce Wade' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#06080d] text-slate-100 antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
