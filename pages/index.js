import Head from 'next/head'
import {
  Header,
  Hero,
  Mid_Section,
  Last_Section,
  Footer,
} from '../components/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fleeks: Where education meets social!</title>
      </Head>

      <Header />
      <Hero />
      <Mid_Section />
      <Last_Section />
      <Footer />
    </>
  )
}

// just a comment
