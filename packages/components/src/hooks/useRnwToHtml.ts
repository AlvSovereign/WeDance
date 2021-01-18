import { ReactElement } from 'react'
import { Platform } from 'react-native'
import { unstable_createElement } from 'react-native-web'

const useRnwToHtml: (
  as: string | undefined,
  props: any,
) => { Component: ReactElement | null } = (as, props) => {
  if (Platform.OS !== 'web' || !as) {
    return { Component: null }
  }

  const Component: ReactElement = unstable_createElement(as, props)

  return { Component }
}

export default useRnwToHtml
