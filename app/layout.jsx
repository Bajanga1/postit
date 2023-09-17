import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './auth/Nav'
import QueryWrapper from './auth/QueryWrapper'





export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <head>
        <body className={`mx-4 md:mx-48 xl:mx-96 font-sans bg-gray-200`}>
          <QueryWrapper>
            <Nav />
            {children}
          </QueryWrapper>
        </body>
      </head>
    </html>
  )
}
