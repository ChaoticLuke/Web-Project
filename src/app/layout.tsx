import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import { DM_Sans} from "next/font/google"

const DM = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["system-ui"],
  variable: "--font-DM_Sans",
})

export const metadata = {
  title: 'Wessex footwear',
  description: 'Wessex footwear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={DM.className}>
      <body className="bg-white mx-auto">
        <header className="justify-between flex items-center bg-white text-3xl font-medium px-1 sm:px-10 pb-2 border border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <div className='mt-0.5 sm:mt-2 text-sm sm:text-3xl px-1 font-medium float-left'>
            <Link href="/">Wessex Footwear</Link>
          </div>
          <div className="mt-0.5 sm:mt-2 text-sm flex sm:items-center px-1 sm:px-1 gap-5 md:gap-10 font-normal sm:text-2xl">
            <Link href="/showcase">Showcase</Link>
            <Link href="/contactus">Contact Us</Link>
            <Link href="/about">About</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}