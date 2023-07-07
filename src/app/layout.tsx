import Link from 'next/link'
import Image from 'next/image'

import './globals.css'
import { DM_Sans} from 'next/font/google'

const DM = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["system-ui"],
  variable: "--font-DM_Sans",
})

export const metadata = {
  title: 'Wessex footware',
  description: 'The website for wessex footware',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white mx-auto sans">
        <header className="justify-between flex bg-white pb-1 sm:pb-2 border border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <div className='mt-1 text-lg sm:text-3xl px-2 sm:px-10 sans font-medium float-left'>
            <Link href="/">Wessex Footwear</Link>
          </div>
          <div className=" mt-2 sm:mt-1 text-sm sm:text-1xl flex sm:items-center px-3 sm:px-10 gap-1 sm:gap-10 font-normal sans sm:text-2xl">
            <Link href="/about">About</Link>
            <Link href="/contactus">Contact Us</Link>
            <Link href="/allproducts">All items</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}