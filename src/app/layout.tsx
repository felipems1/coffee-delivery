/* eslint-disable camelcase */
import { Roboto, Baloo_2 } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { CartProvider } from '../contexts/cart'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
export const baloo = Baloo_2({ weight: ['700', '800'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <div className="flex min-h-screen w-full flex-col bg-background">
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </div>
      </body>
    </html>
  )
}
