import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from 'components/src/hooks'
import { Navigation } from '../components'
import GlobalStyles from '../styles/GlobalStyles'
import { routes } from '../utils'
import 'react-placeholder/lib/reactPlaceholder.css'
import './index.css'

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
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main css={{ display: 'flex', flexDirection: 'row' }}>
            {router.pathname === routes.SIGNIN ? null : <Navigation />}
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
