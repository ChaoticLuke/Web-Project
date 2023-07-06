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
    <html lang="en" className={'${DM.className}'}>
      <body className="bg-white mx-auto sans">
        <header className=" justify-between flex items-center bg-white text-3xl font-medium px-10 pb-2 border border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <div className='mt-1 text-xl sm:text-3xl sans font-medium'>
            <Link href="/">Wessex Footwear</Link>
          </div>
          <div className="flex items-center gap-10 mt-1 font-normal sans text-2xl">
            <Link href="/about">About</Link>
            <Link href="/contactus">Contact Us</Link>
            <Link href="/allproducts">All Items</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}