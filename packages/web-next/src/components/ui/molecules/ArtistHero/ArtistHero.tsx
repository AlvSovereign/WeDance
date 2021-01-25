import { FC } from 'react'
import Image from 'next/image'
import { TFunction } from 'react-i18next'
import { TBreakpoint } from 'components/src/hooks/useResponsive'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { ArtistHeroImage } from 'components/src/assets'
import { Artist } from 'components/src/graphql/types'
import {
  ArtistMostPopularSongs,
  Box,
  Button,
  CountryFlags,
  Text,
} from '../../..'

interface ArtistHeroProps {
  data: Artist
  onFollowClick: () => void
  onPlayClick: () => void
  onShareClick: () => void
  t: TFunction
  theme: ITheme
  windowSize: TBreakpoint
}

const ArtistHero: FC<ArtistHeroProps> = ({
  data,
  onFollowClick,
  onPlayClick,
  onShareClick,
  t,
  theme,
  windowSize,
}) => {
  const { countries, name, releases, tag } = data

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
      <Box direction="column" flex={0.5} justify="flex-end">
        <Text as="h1" color="white" gutterBottom="xxs" variant="hero">
          {name}
        </Text>
        <Text as="p" color="white" gutterBottom="xs" variant="body1">
          {tag}
        </Text>
        {/* <CountryFlags
          css={{ marginBottom: theme.LINEAR_XL }}
          countries={countries}
        /> */}
        <Box css={{ marginBottom: theme.LINEAR_XXL }} direction="row">
          <Button
            css={{ flex: 1, marginRight: theme.LINEAR_SM }}
            onClick={onPlayClick}
            rightIcon="play"
            text={t('play')}
            variant="primary"
          />
          <Button
            css={{ flex: 0.25, marginRight: theme.LINEAR_SM }}
            onClick={onFollowClick}
            rightIcon="personAdd"
            variant="transparent"
          />
          <Button
            css={{ flex: 0.25 }}
            onClick={onShareClick}
            rightIcon="share"
            variant="transparent"
          />
        </Box>
        <ArtistMostPopularSongs releases={releases} t={t} />
      </Box>
    </Box>
  )
}

export default ArtistHero
