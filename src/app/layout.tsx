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
    <html lang="en" className="bg-white">
      <body className={'${DM.className}'}>{children}</body>
    </html>
  )
}
