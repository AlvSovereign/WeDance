import { useEffect, useLayoutEffect, useState } from 'react'
import { useDimensions } from '@react-native-community/hooks'

const useResponsive = () => {
  const { width } = useDimensions().window
  const [size, setSize] = useState<TBreakpoint>('sm')

  let windowSize: TBreakpoint

  if (width < 600) {
    windowSize = 'sm'
  } else if (width >= 600 && width < 840) {
    windowSize = 'md'
  } else {
    windowSize = 'lg'
  }

  useEffect(() => {
    setSize(windowSize)
  }, [windowSize])

  return size
}

export default useResponsive

export type TBreakpoint = 'sm' | 'md' | 'lg'
