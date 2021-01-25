import { FC } from 'react'
import { QueryObserverResult } from 'react-query'
import { GetReleasesByArtistQuery } from 'components/src/graphql/types'

interface TrackCardProps {
  queryData: QueryObserverResult<GetReleasesByArtistQuery, Error>
}

const TrackCard: FC<TrackCardProps> = ({ queryData }) => {
  const { data, isLoading } = queryData

  if (isLoading || !data) {
    return <h2>Loading....</h2>
  }

  const { releasesByArtist } = data

  return <p>{releasesByArtist?.title}</p>
}

export default TrackCard
