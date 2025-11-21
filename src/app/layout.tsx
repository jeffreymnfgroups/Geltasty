'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'
import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en-IN' suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-5GXCBVPCY4'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5GXCBVPCY4');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id='microsoft-clarity' strategy='afterInteractive'>
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u9ifrgcafj");
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          {/* ---------------------Header Starts-----------------  */}
          <Header />
          {/* ---------------------Header Ends-------------------  */}
          {children}
          {/* ---------------------Footer Starts-----------------  */}
          <Footer />
          {/* ---------------------Footer Ends-----------------  */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
