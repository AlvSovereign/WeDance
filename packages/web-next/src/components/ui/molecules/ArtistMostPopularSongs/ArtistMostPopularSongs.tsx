import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import { TFunction } from 'react-i18next'
import { Release, Track } from 'components/src/graphql/types'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { Box, Text, TrackCard } from '../../..'
import { useGetReleasesByArtist } from '../../../../pages/hooks'
import { getTopPlays } from '../../../../utils'

interface ArtistMostPopularSongsProps {
  initialData: Release[]
  releases: Release[]
  t: TFunction<string[]>
}

const ArtistMostPopularSongs: FC<ArtistMostPopularSongsProps> = ({
  initialData,
  releases,
  t,
}) => {
  const theme = useTheme() as ITheme
  const { DARKGREY_100 } = theme

  const releasesByArtist = useGetReleasesByArtist(releases, {
    initialData,
    enabled: !!releases.length,
  })

  return (
    <Box direction="column">
      <Text
        component="h3"
        color="white"
        gutterBottom="sm"
        isReady={!!initialData?.length || !!releases.length}
        loadingProps={{
          color: DARKGREY_100,
          style: { height: 20 },
          type: 'textRow',
        }}
        variant="h5"
      >
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
