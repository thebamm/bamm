import Head from 'next/head'
import { OG_DESCRIPTION, OG_IMAGE_URL, SITE_MAIN_TITLE, SITE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <title>{SITE_MAIN_TITLE}</title>
      <meta name="description"  content={OG_DESCRIPTION} />

      <meta property="og:title" content={SITE_MAIN_TITLE} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE_URL} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#55bb55"/>
      <meta name="msapplication-TileColor" content="#55bb55"/>
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#55bb55"/>
    </Head>
  )
}
