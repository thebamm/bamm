import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='antialiased text-base'>
        <Head />

        <body className='bg-apple-50 text-coal-500 dark:bg-coal-800 dark:text-apple-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
