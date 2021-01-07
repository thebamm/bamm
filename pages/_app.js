import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isProduction = process.env.NODE_ENV === "production"

  useEffect(() => {
    const handleRouteChange = (url) => {
      isProduction && gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
