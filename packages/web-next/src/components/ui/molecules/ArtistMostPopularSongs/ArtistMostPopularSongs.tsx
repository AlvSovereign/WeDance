import { Release } from 'components/src/graphql/types'
import { FC } from 'react'
import { TFunction } from 'react-i18next'
import { Box, Text, TrackCard } from '../../..'

interface ArtistMostPopularSongsProps {
  releases: Release
  t: TFunction
}

const ArtistMostPopularSongs: FC<ArtistMostPopularSongsProps> = ({
  releases,
  t,
}) => {
  return (
    <Box direction="column">
      <Text as="h3" color="white" variant="h5">
        {t('mostPopularSongs')}
      </Text>
      <Box direction="column">
        <TrackCard releases={releases} />
      </Box>
    </Box>
  )
}

export default ArtistMostPopularSongs
