import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Luxe Jewelry - Custom & Artisan Jewelry Collection',
  description: 'Discover our exquisite collection of handcrafted jewelry and create your perfect custom piece. Premium materials, expert craftsmanship, and personalized service.',
  keywords: 'custom jewelry, handmade jewelry, engagement rings, necklaces, bracelets, artisan jewelry, luxury jewelry',
  authors: [{ name: 'Luxe Jewelry' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Luxe Jewelry - Custom & Artisan Jewelry Collection',
    description: 'Discover our exquisite collection of handcrafted jewelry and create your perfect custom piece.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Jewelry - Custom & Artisan Jewelry Collection',
    description: 'Discover our exquisite collection of handcrafted jewelry and create your perfect custom piece.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-50 text-neutral-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}