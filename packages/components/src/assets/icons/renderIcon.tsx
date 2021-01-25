import React from 'react'
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
  fill: string
  icon: IconKey
  styles?: any
}

const renderIcon = ({ fill, icon, styles }: IRenderIcon) => {
  const icons = {
    bookmark: <BookmarkOutline fill={fill} style={styles} />,
    chevronRight: <ChevronRight fill={fill} style={styles} />,
    cross: <Clear fill={fill} style={styles} />,
    facebook: <FBLogo fill={fill} style={styles} />,
    google: <GLogo fill={fill} style={styles} />,
    library: <Library fill={fill} style={styles} />,
    more: <MoreHorizontal fill={fill} style={styles} />,
    news: <Discovery fill={fill} style={styles} />,
    personAdd: <PersonAdd fill={fill} style={styles} />,
    playerPause: <PauseCircleOutline fill={fill} style={styles} />,
    play: <PlayOutline fill={fill} style={styles} />,
    playlistAdd: <PlaylistAdd fill={fill} style={styles} />,
    playerPlay: <PlayCircleOutline fill={fill} style={styles} />,
    repeat: <Repeat fill={fill} style={styles} />,
    search: <Search fill={fill} style={styles} />,
    settings: <Settings fill={fill} style={styles} />,
    share: <ShareFilled fill={fill} style={styles} />,
    shuffle: <Shuffle fill={fill} style={styles} />,
    skipNext: <SkipNext fill={fill} style={styles} />,
    skipPrevious: <SkipPrevious fill={fill} style={styles} />,
    volumeDown: <VolumeDown fill={fill} style={styles} />,
    volumeMute: <VolumeMute fill={fill} style={styles} />,
    volumeOff: <VolumeOff fill={fill} style={styles} />,
    volumeUp: <VolumeUp fill={fill} style={styles} />,
  }

  return icons[icon]
}

export default renderIcon
