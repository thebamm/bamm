---
title: 'Using Google Analytics with Next.js'
excerpt: ''
coverImage: '/assets/blog/nextjs-and-google-analytics.jpeg'
figcaption: 'Photo by <a href="https://unsplash.com/@mjessier" target="_blank" rel="noopener noreferrer nofollow">Myriam Jessier</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer nofollow">Unsplash</a>'
date: '2021-01-07T00:00:00.322Z'
author:
  name: Bojan Petkovski
  twitter: object505
  gravatar: d132c4301b9b998f396871b74b3a97fc
ogImage:
  url: '/assets/blog/nextjs-and-google-analytics.jpeg'
category: 'Next.js'
---

Google Analytics is a web analytics service offered by Google that tracks 
and reports website traffic (session duration, pages per session, 
bounce rate, source of traffic, etc.). It is a free and powerful tool that allows 
you to see how the users are interacting with your site. 

You can create your own if you visit the Google Analytics <a href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener noreferrer nofollow">site</a>. 

Let's see how we can integrate it and start using it with Next.js.

## Setup 

First we will create our `gtag.js` file that will serve the code needed to
track page views and events with Google Analytics. I will place this file in
the `lib` folder. If you don't have one, create it, and put the 
`gtag.js` file there.

```javascript
// lib/gtag.js
import { GA_TRACKING_ID } from './constants'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

I have a `constants.js` file where I am keeping the Google Analytics tracking id.
It looks like this:

```javascript
export const GA_TRACKING_ID = 'Your-tracking-id'
```

Next, we will inject the tracking snippet in the 
<a href="https://nextjs.org/docs/advanced-features/custom-document" target="_blank" rel="noopener noreferrer nofollow">custom document</a> file. 
If you don't have a `_document.js` in the `pages` folder, create one.

```javascript
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/constants'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
        </Head>
    
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
  }
}

```

Now we are ready to start tracking the page views and events in our application.

## Page views

The last part is to set the tracking of page view on the route change event.
For this, we need to update the `_app.js` file. If you don't have one,
create it in the `pages` folder.

```javascript
// pages/_app.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

```

## Events

You can also use the `event` method that we have set up in the `gtag.js` file, 
to track/measure Google Analytics Events.

```javascript
import * as gtag from '../lib/gtag'

gtag.event({ action, category, label, value })
```
Where the values for ```action, category, label, value``` represent the following:

* `action` - The value that will appear as the event action in Google Analytics Event reports.
* `category` - The category of the event.
* `label` - The label of the event.
* `value` - A non-negative integer that will appear as the event value.

The following sends an event with an action of `aaa`, a category of `bbb`, 
and a label of `ccc`:

```javascript
const myEvent = { 
  action: 'aaa', 
  category: 'bbb', 
  label: 'ccc' 
}

const handleEvent = () => {
  gtag.event(myEvent)
}
```

You can read more about it in the Google Analytics Developers Guide for
<a href="https://developers.google.com/analytics/devguides/collection/gtagjs/events" target="_blank" rel="noopener noreferrer nofollow">events</a>.

## Conclusion

As you can see, it is not very difficult to set up Google Analytics with Next.js.

Just copy/paste the code snippets from this guide, update the tracking id, and you are ready 
to start using Google Analytics in your Next.js application.

Do you know an easier way to do it? 

Or maybe you have some remarks about this set up?

Hit me in the comments below :)
