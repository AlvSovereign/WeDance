import styled from '@emotion/styled'
import React from 'react'
import { Flag } from 'react-native-svg-flagkit'
import { Box } from '../../..'

interface CountryFlagsProps {
  className: string
  countries: string[]
}

const CountryFlags = ({ className, countries }: CountryFlagsProps) => {
  return (
    <Box direction="row" className={className}>
      {countries.map((country: any) => {
        return (
          <div key={country} className="flagContainer">
            <Flag id={country} size={0.1} />
          </div>
        )
      })}
    </Box>
  )
}

const StyledCountryFlags = styled((props: any) => <CountryFlags {...props} />)`
  ${({ theme }) => ({
    '.flagContainer': {
      marginRight: theme.LINEAR_XS,
    },
  })}
`

export default StyledCountryFlags
