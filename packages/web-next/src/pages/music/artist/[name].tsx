import { GET_ARTIST, GET_ARTISTS } from 'components'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@emotion/react'
import { useResponsive } from 'components/src/hooks'
import { Artist, ArtistQuery, Release } from 'components/src/graphql/types'
import { ArtistHero, Page } from '../../../components'
import { fetcher } from '../../../utils'
import { useGetArtist } from '../../hooks'
import { GET_RELEASES_BY_ARTIST } from 'components/src/graphql/queries'

interface ArtistPageProps {
  initialArtistReleaseData: Release[]
}

const ArtistPage: FC<ArtistPageProps> = ({ initialArtistReleaseData }) => {
  const theme = useTheme()
  const { t } = useTranslation(['artist'])
  const windowSize = useResponsive()
  const router = useRouter()
  const { data, isLoading } = useGetArtist(router.query.name)

  return (
    <Page>
      {!isLoading ? (
        <ArtistHero
          initialArtistReleaseData={initialArtistReleaseData}
          data={(data as ArtistQuery)?.artist}
          onFollowClick={() => {}}
          onPlayClick={() => {}}
          onShareClick={() => {}}
          t={t}
          theme={theme}
          windowSize={windowSize}
        />
      ) : null}
    </Page>
  )
}

export default ArtistPage

const getStaticPaths = async () => {
  const { artists } = await fetcher(GET_ARTISTS)
  const paths: string[] = artists.map((artist: Artist) => ({
    params: { name: artist.url },
  }))

  return { paths, fallback: false }
}

const getStaticProps = async ({ params }) => {
  const { name } = params
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['artist', name], () =>
    fetcher(GET_ARTIST, {
      input: {
        url: name,
      },
    }),
  )

  // hacky but we need the ids to query for the releases.
  const { artist } = await queryClient.getQueryCache().queries[0].state.data

  const initialArtistReleaseData = await Promise.all(
    artist.releases.map((release) =>
      fetcher(GET_RELEASES_BY_ARTIST, { input: { _id: release._id } }),
    ),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialArtistReleaseData,
    },
    revalidate: 60 * 60 * 24, // 24hrs
  }
}

export { getStaticPaths, getStaticProps }
