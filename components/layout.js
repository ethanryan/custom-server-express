import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <article>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </article>
  )
}