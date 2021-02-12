import { FC } from 'react'
import xw from 'xwind'
import Image from 'next/image'
import { useTheme } from '@emotion/react'
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

interface ArtistHeroProps {
  data: Artist | undefined | null
  initialArtistReleaseData: Release[]
  onFollowClick: () => void
  onPlayClick: () => void
  onShareClick: () => void
  t: TFunction<string[]>
  windowSize: TBreakpoint
}

const ArtistHero: FC<ArtistHeroProps> = ({
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
    DARKGREY_400,
    DARKGREY_500,
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
          alt={`Cover image of ${data?.name}`}
          css={{ zIndex: -1 }}
          layout="fill"
          objectFit="cover"
          priority
          src={ArtistHeroImage}
        />
      </div>
      <Box
        css={[
          xw`mb-5 md:mb-6 px-5 md:px-6`,
          windowSize === 'lg' ? xw`flex-1/2` : xw`flex-1`,
        ]}
        direction="column"
        justify="flex-end"
      >
        <Text
          component="h1"
          color="white"
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
        <Box css={xw`mb-8 md: mb-10`} direction="row">
          <Button
            css={xw`mr-3 w-40`}
            isReady={!!data}
            loadingProps={{
              color: DARKGREY_100,
              style: { height: 40 },
              type: 'textRow',
            }}
            onClick={onPlayClick}
            icon={{ textColor: 'white', iconKey: 'play', position: 'right' }}
            text={t('play')}
            variant="primary"
          />
          <Button
            css={xw`w-auto`}
            onClick={onFollowClick}
            icon={{
              textColor: 'blue',
              position: 'right',
              iconKey: 'personAdd',
            }}
            text={t('follow')}
            variant="secondary"
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
