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
     
      <body className="bg-white mx-auto">
        <header className="flex justify-between items-center text-4xl px-10 pb-2">
          <Link href="/">Wessex Footwear</Link>
          <div className="flex items-center gap-10 text-2xl">
            <Link href="/about">About us</Link>
            <p>Third text</p>
          </div>

        </header>
        {children}
      </body>
    </html>
  )
}
