import xw from 'xwind'
import {
  BookmarkOutline,
  ChevronRight,
  Clear,
  FBLogo,
  GLogo,
  Library,
  MoreHorizontal,
  Discovery,
  PauseCircleOutline,
  PersonAdd,
  PlayOutline,
  PlayCircleOutline,
  PlaylistAdd,
  Repeat,
  Search,
  Settings,
  ShareFilled,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from '.'

export type IconKey =
  | 'bookmark'
  | 'chevronRight'
  | 'cross'
  | 'facebook'
  | 'google'
  | 'library'
  | 'more'
  | 'news'
  | 'personAdd'
  | 'playerPause'
  | 'play'
  | 'playerPlay'
  | 'playlistAdd'
  | 'repeat'
  | 'search'
  | 'settings'
  | 'share'
  | 'shuffle'
  | 'skipNext'
  | 'skipPrevious'
  | 'volumeDown'
  | 'volumeMute'
  | 'volumeOff'
  | 'volumeUp'

interface IRenderIcon {
  textColor: 'blue' | 'gray' | 'white'
  iconKey: IconKey
  className?: string[]
}

const renderIcon = ({ className, iconKey, textColor }: IRenderIcon) => {
  const cssStyles = [
    xw`fill-current`,
    textColor === 'blue' && xw`text-blue-500`,
    textColor === 'white' && xw`text-white`,
    className,
  ]

  const icons = {
    bookmark: <BookmarkOutline css={cssStyles} />,
    chevronRight: <ChevronRight css={cssStyles} />,
    cross: <Clear css={cssStyles} />,
    facebook: <FBLogo css={cssStyles} />,
    google: <GLogo css={cssStyles} />,
    library: <Library css={cssStyles} />,
    more: <MoreHorizontal css={cssStyles} />,
    news: <Discovery css={cssStyles} />,
    personAdd: <PersonAdd css={cssStyles} />,
    playerPause: <PauseCircleOutline css={cssStyles} />,
    play: <PlayOutline css={cssStyles} />,
    playlistAdd: <PlaylistAdd css={cssStyles} />,
    playerPlay: <PlayCircleOutline css={cssStyles} />,
    repeat: <Repeat css={cssStyles} />,
    search: <Search css={cssStyles} />,
    settings: <Settings css={cssStyles} />,
    share: <ShareFilled css={cssStyles} />,
    shuffle: <Shuffle css={cssStyles} />,
    skipNext: <SkipNext css={cssStyles} />,
    skipPrevious: <SkipPrevious css={cssStyles} />,
    volumeDown: <VolumeDown css={cssStyles} />,
    volumeMute: <VolumeMute css={cssStyles} />,
    volumeOff: <VolumeOff css={cssStyles} />,
    volumeUp: <VolumeUp css={cssStyles} />,
  }

  return icons[iconKey]
}

export default renderIcon
