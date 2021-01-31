import React, { FC } from 'react'
import Image from 'next/image'
import { TFunction } from 'react-i18next'
import { TBreakpoint } from 'components/src/hooks/useResponsive'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { ArtistHeroImage } from 'components/src/assets'
import { Artist, Release } from 'components/src/graphql/types'
import {
  ArtistMostPopularSongs,
  Box,
  Button,
  CountryFlags,
  Text,
} from '../../..'
import { useTheme } from '@emotion/react'

interface ArtistHeroProps {
  artistDataLoading: boolean
  data: Artist
  initialArtistReleaseData: Release[]
  onFollowClick: () => void
  onPlayClick: () => void
  onShareClick: () => void
  t: TFunction
  windowSize: TBreakpoint
}

const ArtistHero: FC<ArtistHeroProps> = ({
  artistDataLoading,
  data,
  initialArtistReleaseData,
  onFollowClick,
  onPlayClick,
  onShareClick,
  t,
  windowSize,
}) => {
  const theme = useTheme() as ITheme
  const {
    DARKGREY_100,
    LINEAR_LG,
    LINEAR_SM,
    LINEAR_XL,
    LINEAR_XXL,
    WHITE,
  } = theme

  return (
    <Box
      css={{
        background:
          windowSize === 'lg'
            ? 'linear-gradient(90deg, rgba(18,19,23,0.8001401244091386) 0%, rgba(18,19,23,0.8001401244091386) 50%, rgba(18,19,23,0) 100%)'
            : 'rgba(18,19,23,0.7)',
        minHeight: 760,
      }}
      direction="row"
      position="relative"
    >
      <div css={{ zIndex: -1 }}>
        <Image
          alt="Image of DJ"
          css={{ zIndex: -1 }}
          objectFit="cover"
          layout="fill"
          src={ArtistHeroImage}
        />
      </div>
      <Box
        css={{
          marginBottom: LINEAR_XXL,
          paddingLeft: LINEAR_XL,
          paddingRight: LINEAR_LG,
        }}
        direction="column"
        flex={windowSize === 'lg' ? 0.5 : 1}
        justify="flex-end"
      >
        <Text
          component="h1"
          color="white"
          gutterBottom="xxs"
          isReady={!!data?.name}
          loadingProps={{
            color: DARKGREY_100,
            style: { height: 64 },
            type: 'textRow',
          }}
          variant="hero"
        >
          {data?.name}
        </Text>
        <Text
          component="p"
          color="white"
          gutterBottom="xs"
          isReady={!!data?.tag}
          loadingProps={{
            color: DARKGREY_100,
            style: { height: 14 },
            type: 'textRow',
          }}
          variant="body1"
        >
          {data?.tag}
        </Text>
        {/* <CountryFlags
          css={{ marginBottom: theme.LINEAR_XL }}
          countries={countries}
        /> */}
        <Box css={{ marginBottom: LINEAR_XXL }} direction="row">
          <Button
            css={{ flex: 1, marginRight: LINEAR_SM }}
            isReady={!!data}
            loadingProps={{
              color: DARKGREY_100,
              style: { height: 40 },
              type: 'textRow',
            }}
            onClick={onPlayClick}
            rightIcon={{ fill: WHITE, icon: 'play' }}
            text={t('play')}
            variant="primary"
          />
          <Button
            css={{ flex: 0.25, marginRight: LINEAR_SM }}
            onClick={onFollowClick}
            rightIcon={{ fill: WHITE, icon: 'personAdd' }}
            variant="transparent"
          />
          <Button
            css={{ flex: 0.25 }}
            onClick={onShareClick}
            rightIcon={{ fill: WHITE, icon: 'share' }}
            variant="transparent"
          />
        </Box>
        <ArtistMostPopularSongs
          initialData={initialArtistReleaseData}
          releases={(data?.releases || []) as Release[]}
          t={t}
        />
      </Box>
    </Box>
  )
}

export default ArtistHero
