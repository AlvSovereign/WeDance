import { Track } from 'components/src/graphql/types'

type OrderedTrack = Track & { number: string }

const getTopPlays: (args0: {
  limit: number
  rankBy: keyof Track
  tracks: OrderedTrack[]
}) => Track[] = ({ limit, rankBy, tracks }) =>
  tracks
    .slice(0, limit)
    .flat()
    .sort((a: Track, b: Track) => a[rankBy] + b[rankBy])

export default getTopPlays
