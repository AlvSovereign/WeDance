import xw from 'xwind'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from 'components/src/hooks'
import { MsqPlayer, Navigation } from '@components/index'
import GlobalStyles from '../styles/GlobalStyles'
import { routes } from '../utils'
import 'react-placeholder/lib/reactPlaceholder.css'
import './base.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

persistWithLocalStorage(queryClient)

function App({ Component, pageProps }) {
  const router = useRouter()
  const theme = useAppTheme()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <ThemeProvider theme={theme}> */}
        <Head>
          <title>wedance</title>
        </Head>
        <GlobalStyles />
        <main css={xw`h-screen flex overflow-hidden bg-white`}>
          {router.pathname === routes.SIGNIN ? null : <Navigation />}
          <Component {...pageProps} />
          <MsqPlayer />
        </main>
        {/* </ThemeProvider> */}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
