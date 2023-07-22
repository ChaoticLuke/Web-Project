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
  description: 'The website for wessex footwear (insane)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className={`${DM.className}`}>
      <body className="bg-white mx-auto ">
        <header className=" justify-between flex items-center bg-white text-3xl font-medium px-10 py-3 border border-t-0 border-r-0 border-l-0 border-b-2 sticky top-0 w-full">
          <div className='mt-1 sans font-medium'>
            <Link href="/">Wessex Footwear</Link>
          </div>
          <div className="flex items-center gap-10 mt-1 font-normal text-2xl">
=======
    <html lang="en" className={DM.className}>
      <body className="bg-white mx-auto">
        <header className="justify-between flex items-center bg-white text-3xl font-medium px-1 sm:px-10 pb-2 border border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <div className='mt-0.5 sm:mt-2 text-sm sm:text-3xl px-1 font-medium float-left'>
            <Link href="/">Wessex Footwear</Link>
          </div>
          <div className="mt-0.5 sm:mt-2 text-sm flex sm:items-center px-1 sm:px-10 gap-1 sm:gap-10 font-normal sm:text-2xl">
>>>>>>> e368337bab58533bbf1dcb97101585e8ca9e196e
            <Link href="/allproducts">All Products</Link>
            <Link href="/item">Item</Link>
            <Link href="/contactus">Contact Us</Link>
            <Link href="/about">About</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}