import React, { FC } from 'react'
import { GET_ARTIST, GET_ARTISTS } from 'components'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { useTheme } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import { useResponsive } from 'components/src/hooks'
import { Artist, Release } from 'components/src/graphql/types'
import { ArtistHero, Page } from '../../../components'
import { fetcher } from '../../../utils'
import { useGetArtist } from '../../hooks'
import { GET_RELEASES_BY_ARTIST } from 'components/src/graphql/queries'

interface ArtistPageProps {
  initialArtistReleaseData: Release[]
}

const ArtistPage: FC<ArtistPageProps> = ({ initialArtistReleaseData }) => {
  const { t } = useTranslation(['artist'])
  const windowSize = useResponsive()
  const router = useRouter()
  const { data, isLoading } = useGetArtist(router.query.name)

  return (
    <Page>
      <Head>
        <title>{`${isLoading ? 'Loading...' : data?.artist?.name} - ${
          isLoading ? 'Loading...' : data?.artist?.tag
        } || wedance`}</title>
      </Head>
      <ArtistHero
        artistDataLoading={isLoading}
        data={data?.artist}
        initialArtistReleaseData={initialArtistReleaseData}
        onFollowClick={() => {}}
        onPlayClick={() => {}}
        onShareClick={() => {}}
        t={t}
        windowSize={windowSize}
      />
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
