import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/constants'

const isProduction = process.env.NODE_ENV === "production"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='antialiased text-base'>
        <Head>
          {isProduction &&
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>
          }
        </Head>

        <body className='bg-white text-coal-500 dark:bg-coal-800 dark:text-apple-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
