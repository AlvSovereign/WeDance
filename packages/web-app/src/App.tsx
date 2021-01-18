import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  Discovery,
  i18n,
  ProtectedRoute,
  SignIn,
  ThemeContext,
} from 'components'
import './index.css'
import { useGetMeQuery } from 'components/src/graphql/types'

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const { data, loading, refetch } = useGetMeQuery()

  if (loading) {
    return null
  }

  return (
    <ThemeContext>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            redirect={[{ shouldRedirect: !!data?.me, to: '/' }]}
            path="/signin"
          >
            {(props) => <SignIn fetchMe={refetch} {...props} />}
          </ProtectedRoute>
          <ProtectedRoute
            redirect={[{ shouldRedirect: !!!data?.me, to: '/signin' }]}
            path="/"
            component={Discovery}
          />
        </Switch>
      </BrowserRouter>
    </ThemeContext>
  )
}

export default App
