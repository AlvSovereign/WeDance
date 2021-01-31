import styled from '@emotion/styled'
import { FC } from 'react'
import { Box, Text } from '../../..'

interface DividerWithTextProps {
  className: string
  text: string
}

const DividerWithText: FC<DividerWithTextProps> = ({ className, text }) => {
  return (
    <Box align="center" className={className} direction="row">
      <hr />
      <Text component="span" color="lightGrey" variant="body1">
        {text}
      </Text>
      <hr />
    </Box>
  )
}

const StyledDividerWithText = styled((props: any) => (
  <DividerWithText {...props} />
))`
  ${({ theme }) => {
    const { LIGHTGREY_300, LINEAR_XS } = theme

    return {
      hr: {
        borderWidth: 0.5,
        borderColor: LIGHTGREY_300,
        flex: 1,
      },
      span: {
        marginLeft: LINEAR_XS,
        marginRight: LINEAR_XS,
      },
    }
  }}
`

export default StyledDividerWithText
