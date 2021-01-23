import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from 'components/src/hooks'
import { Navigation } from '../components'
import GlobalStyles from '../styles/GlobalStyles'
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
  const theme = useAppTheme()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main css={{ display: 'flex', flexDirection: 'row' }}>
            <Navigation />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
