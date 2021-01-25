import { FC } from 'react'
import { TFunction } from 'react-i18next'
import { Release } from 'components/src/graphql/types'
import { Box, Text, TrackCard } from '../../..'
import { useGetReleasesByArtist } from '../../../../pages/hooks'

interface ArtistMostPopularSongsProps {
  releases: Release[] | null | undefined
  t: TFunction
}

const ArtistMostPopularSongs: FC<ArtistMostPopularSongsProps> = ({
  releases,
  t,
}) => {
  const releasesByArtist = useGetReleasesByArtist(releases)

  return (
    <Box direction="column">
      <Text as="h3" color="white" variant="h5">
        {t('mostPopularSongs')}
      </Text>
      <Box direction="column">
        {releasesByArtist.map((release) => (
          <TrackCard key={Math.random()} queryData={release} />
        ))}
      </Box>
    </Box>
  )
}

export default ArtistMostPopularSongs
