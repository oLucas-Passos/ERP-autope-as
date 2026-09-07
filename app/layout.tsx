import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Valenko — Sua loja inteira. Na mesma direção.',
  description: 'Gestão para autopeças. Conecte entrada de notas, estoque, vendas, caixa e financeiro na mesma operação. Conheça o sistema Valenko por dentro.',
  metadataBase: new URL('https://valenko-gestao.dltlucas1608.chatgpt.site'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
