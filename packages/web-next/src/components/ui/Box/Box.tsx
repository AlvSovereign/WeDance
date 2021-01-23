import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'

interface BoxProps {
  align: 'flex-start' | 'flex-end' | 'center'
  as?: any
  children: ReactNode
  className: string
  direction: 'column' | 'row'
  flex: number
  justify: 'flex-start' | 'flex-end' | 'center'
}

const Box: FC<BoxProps> = ({ as, children, className }) => {
  const Component = as || 'div'
  return <Component className={className}>{children}</Component>
}

const StyledBox = styled((props: any) => <Box {...props} />)`
  ${({ align, direction, flex, justify }: BoxProps) => ({
    alignItems: align,
    display: 'flex',
    flex,
    flexDirection: direction,
    justifyContent: justify,
  })}
`

export default StyledBox
