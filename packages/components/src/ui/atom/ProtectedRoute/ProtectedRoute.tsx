import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

type Redirects = {
  /**
   * Add state to the redirected location
   */
  state?: Record<string, unknown>
  /**
   * A boolean to indicate when this route should redirect
   */
  shouldRedirect: boolean
  /**
   * The path to redirect to
   */
  to: string
}

interface ProtectedRouteProps extends RouteProps {
  redirect: Redirects[]
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ redirect, ...rest }) => {
  const willRedirct = redirect.find((value) => value.shouldRedirect === true)

  if (willRedirct) {
    return (
      <Redirect to={{ pathname: willRedirct.to, state: willRedirct.state }} />
    )
  }

  return <Route {...rest} />
}

export default ProtectedRoute
