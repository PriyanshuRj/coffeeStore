import './globals.css'
import { Inter } from 'next/font/google'
import {  useReducer, createContext } from 'react'
import StoreProvider from "../store/store"
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Coffee Store',
  description: 'Coffee store application',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <StoreProvider>

      <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  )
}
