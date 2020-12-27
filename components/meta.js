import Head from 'next/head'
import { OG_DESCRIPTION, OG_IMAGE_URL, SITE_MAIN_TITLE, SITE_URL } from '../lib/constants'

export default function Meta({meta}) {
  const metaData = {
    title: meta?.title ?? SITE_MAIN_TITLE,
    description: meta?.description ?? OG_DESCRIPTION,
    url: meta?.url ?? SITE_URL,
    type: meta?.type ?? 'website',
    image: meta?.image ?? OG_IMAGE_URL
  }

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />

      <meta property="og:title" content={metaData.title} />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:type" content={metaData.type} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:site_name" content={SITE_MAIN_TITLE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:site" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />
      <meta name="twitter:image:alt" content={metaData.title} />

      <link rel="canonical" href={metaData.url} />

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
