import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { Provider } from 'react-redux'
import store from '../store'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if (appProps.router.pathname.includes('auth')) return <Component {...pageProps} />

    return (
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    )
  }
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Provider store={store}>{getContent()}</Provider>
    </ThemeProvider>
  )
}
