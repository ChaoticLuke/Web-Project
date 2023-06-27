import Link from 'next/link'
import './globals.css'
import { DM_Sans} from 'next/font/google'

const DM = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["system-ui"],
  variable: "--font-DM_Sans",
})

export const metadata = {
  title: 'NIGHTMARE NIGHTMARE NIGHTMARE',
  description: 'WAKE UP WAKE UP WAKE UP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'${DM.className}'}>
      <body className="bg-white mx-auto ">
        <header className="flex justify-between items-center bg-white text-3xl font-medium px-10 pb-2 border border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <Link href="/">Wessex Footwear</Link>
          <div className="flex items-center gap-10 mt-1 font-normal text-2xl">
            <Link href="/about">About</Link>
            <Link href="/contact"> Contact Us</Link>
            <Link href="/allproduct"> All products</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}