import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme/index'
import Head from 'next/head'

import '../lib/css/index.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>   
        <Head>
          <meta name="facebook-domain-verification" content="uwn7li3powk0yic8r9jfyy9pihtgxn" />
        </Head>     
       <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
