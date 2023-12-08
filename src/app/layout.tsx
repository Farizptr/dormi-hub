import { AuthProvider } from '@context/authProvider';
import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DormiHub',
  description: 'Cari kostan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <ToastContainer />
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  )
}
