import type { Metadata } from "next"
import "./globals.css"
import { Jacquarda_Bastarda_9, Jacquard_12, Inter } from "next/font/google"

const jacquardaBastarda9 = Jacquarda_Bastarda_9({
  weight: "400",
  variable: "--font-jacquarda-bastarda-9",
  subsets: ["latin"],
})

const jacquard = Jacquard_12({
  weight: "400",
  variable: "--font-jacquard",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ubu.zip",
  description: "Welcome to ubu.zip",
  openGraph: {
    images: "/share-image.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${jacquardaBastarda9.variable} ${jacquard.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
