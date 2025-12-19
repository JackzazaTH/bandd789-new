import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import '../globals.css';

const prompt = Prompt({ 
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  title: 'DDHOUSE - Coming Soon',
  description: 'DDHOUSE construction-themed coming soon page.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={prompt.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}