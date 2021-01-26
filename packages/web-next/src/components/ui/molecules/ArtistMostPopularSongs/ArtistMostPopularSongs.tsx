import { FC } from 'react'
import { TFunction } from 'react-i18next'
import { Release, Track } from 'components/src/graphql/types'
import { Box, Text, TrackCard } from '../../..'
import { useGetReleasesByArtist } from '../../../../pages/hooks'
import { getTopPlays } from '../../../../utils'

interface ArtistMostPopularSongsProps {
  initialData: Release[]
  releases: Release[] | null | undefined
  t: TFunction
}

const ArtistMostPopularSongs: FC<ArtistMostPopularSongsProps> = ({
  initialData,
  releases,
  t,
}) => {
  const releasesByArtist = useGetReleasesByArtist(releases, {
    initialData,
  })

  if (!releases) {
    return null
  }

  return (
    <Box direction="column">
      <Text as="h3" color="white" gutterBottom="sm" variant="h5">
        {t('mostPopularSongs')}
      </Text>
      {releasesByArtist.every((release) => release.isSuccess) ? (
        <Box
          css={{
            'button:last-child': {
              marginBottom: 0,
            },
          }}
          direction="column"
        >
          {releasesByArtist
            .map((release) =>
              getTopPlays({
                limit: 5,
                rankBy: 'plays',
                tracks: release.data?.releasesByArtist.tracks.map(
                  (track) => track,
                ) as Track[],
              }),
            )
            .flat()
            .map((track, index, array) => (
              <TrackCard
                key={track?._id}
                trackNo={`${array.length < 10 ? 0 : ''}${index + 1}`}
                track={track}
              />
            ))}
        </Box>
      ) : null}
    </Box>
  )
}

export default ArtistMostPopularSongs
