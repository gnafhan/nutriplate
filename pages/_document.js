import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <Link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Manrope:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
