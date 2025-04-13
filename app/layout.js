import { Ubuntu_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "aos/dist/aos.js"
import "./globals.css";
import Script from 'next/script'

const inter = Ubuntu_Sans({ weight: '400', subsets: ['latin'] })


export const metadata = {
  title: "Shashank Kawle",
  description: "Portfolio by Shashank Kawle",
  generator: 'Next.js',
  applicationName: 'Portfolio',
  keywords: ['next.js', 'shashank', 'JavaScript' , 'shashank kawle' , 'Shashank' , 'portfolio'],
  authors: [{name: 'Shashank Kawle' , url : 'https://ishashankkawle.github.io/'}],
  creator: 'Shashank Kawle',
  publisher: 'Shashank Kawle',
  category: 'Web'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ---------------------- GOOGLE ANALYTICS ----------------------- */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TS1VRZGY1S" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
            gtag('config', 'G-TS1VRZGY1S');`}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
