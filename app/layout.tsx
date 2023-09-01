import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './css/global.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Temperature Map',
  description: 'Informacion detallada de temperatura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <link rel="stylesheet" href="https://js.arcgis.com/4.20/esri/themes/light/main.css"></link>
        <script src="https://js.arcgis.com/4.20/"></script>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
