/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { useResponsive } from 'components/src/hooks'
import { useTranslation } from 'react-i18next'
import { Text } from '../../..'
import { routes } from '../../../../utils'

interface NavigationProps {
  className: string
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation(['nav'])
  const windowSize = useResponsive()
  console.log('windowSize: ', windowSize)

  return (
    <nav
      className={className}
      css={{ width: windowSize === 'lg' ? '264px' : '120px' }}
    >
      <Text component="h3" variant="h3">
        wedance
      </Text>

      <ul>
        <li>
          <Link href={routes.MUSIC_HOME} passHref>
            <a>{t('home')}</a>
          </Link>
        </li>
        <li>
          <Link href={routes.EXPLORE} passHref>
            <a>{t('explore')}</a>
          </Link>
        </li>
        <li>
          <Link href={routes.LIBRARY} passHref>
            <a>{t('library')}</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledNavigation = styled((props: any) => <Navigation {...props} />)`
  ${({ theme }: { theme: ITheme }) => {
    const { LINEAR_LG, LINEAR_MD, WHITE } = theme

    return {
      backgroundColor: WHITE,
      paddingLeft: LINEAR_MD,
      paddingTop: LINEAR_LG,
    }
  }}
`

export default StyledNavigation
