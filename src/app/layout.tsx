import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bruce Wade | Systems Engineer • Simulation & Tools • Founder',
  description:
    'Systems architecture portfolio for Bruce Wade: Specializing in Physical AI, NVIDIA Isaac Sim, OpenUSD pipelines, Unreal Engine C++ dual-window simulation, and scalable cloud architecture.',
  keywords: [
    'Bruce Wade',
    'Systems Engineer',
    'Isaac Sim',
    'Physical AI',
    'Robotics Synthetic Data',
    'OpenUSD',
    'Unreal Engine C++',
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#06080d] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
