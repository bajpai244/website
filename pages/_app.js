import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme/index'

import '../lib/css/index.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
