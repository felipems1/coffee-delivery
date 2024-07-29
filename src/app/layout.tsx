/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Roboto, Baloo_2 } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'] })
const baloo = Baloo_2({ weight: ['700', '800'] })

export const metadata: Metadata = {
  title: 'Coffee Delivery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
