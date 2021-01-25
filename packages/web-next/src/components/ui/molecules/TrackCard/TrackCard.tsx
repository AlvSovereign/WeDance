import { FC } from 'react'
import { QueryObserverResult } from 'react-query'
import { Track } from 'components/src/graphql/types'

interface TrackCardProps {
  track: Track
}

const TrackCard: FC<TrackCardProps> = ({ track }) => {
  const { title } = track

  return <p>{title}</p>
}

export default TrackCard
