import Link from 'next/link'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/next';
import './globals.css'
import { DM_Sans} from "next/font/google"
import { NextSeo } from 'next-seo';


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
//Layout for website, only has top nav
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={DM.className}>
          <Analytics />
          <NextSeo
            title="Wessex Footware"
            description="This is the official site of Wessex Footware, a slipper company running and trusted for 32 years."
            canonical="https://web-project-tau.vercel.app/"
            openGraph={{
              url: 'https://web-project-tau.vercel.app/',
              title: 'The official site for Wessex Footware',
              description: 'A slipper company running for 32 years. A place to trust. ',
              images: [
                {
                  url: '/Image_M_1.jpeg',
                  width: 1342,
                  height: 1005,
                  alt: 'Various Slippers of diffrent colouration',
                  type: 'image/jpeg',
                }
              ],
              siteName: 'SiteName',
            }}
            twitter={{
              handle: '@handle',
              site: '@site',
              cardType: 'summary_large_image',
            }}
          />
      <body className="bg-white mx-auto">
        <header className="justify-between flex items-center bg-white text-3xl font-medium px-1 sm:px-10 pb-2 border-gray-200 border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full">
          <Link className='mt-1 sm:mt-2 text-sm sm:text-3xl px-1 font-medium float-left hover:text-darkgreen active:text-lmossgreen' href="/">Wessex Footwear</Link>
          <div className="mt-1 sm:mt-2 text-sm flex sm:items-center px-1 sm:px-1 gap-5 md:gap-10 font-normal sm:text-2xl ">
            <Link className='hover:text-darkgreen active:text-lmossgreen' href="/showcase">Showcase</Link>
            <Link className='hover:text-darkgreen active:text-lmossgreen' href="/about">About</Link>
            <Link className='hover:text-darkgreen active:text-lmossgreen' href="/contactus">Contact Us</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}