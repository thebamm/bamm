import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

export default function Layout({ preview, meta, children }) {
  return (
    <>
      <Meta meta={meta} />

      <Header />

      <div className="min-h-screen">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}
