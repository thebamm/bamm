import Header from './header'
import Footer from './footer'
import Meta from './meta'
// import NewsletterForm from './newsletterForm'

export default function Layout({ meta, children }) {
  return (
    <>
      <Meta meta={meta} />

      <Header />

      <div className="min-h-screen">
        <main>{children}</main>
      </div>

      {/*<NewsletterForm/>*/}

      <Footer />
    </>
  )
}
