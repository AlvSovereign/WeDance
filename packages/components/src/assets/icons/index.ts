import BookmarkOutline from './BookmarkOutline';
import Check from './Check';
import ChevronRight from './ChevronRight';
import Clear from './Clear';
import Discovery from './Discovery';
import FBLogo from './FBLogo';
import GLogo from './GLogo';
import Library from './Library';
import MoreHorizontal from './MoreHorizontal';
import PlayCircleOutline from './PlayCircleOutline';
import PauseCircleOutline from './PauseCircleOutline';
import PlaylistAdd from './PlaylistAdd';
import PlayOutline from './PlayOutline';
import RadioChecked from './RadioChecked';
import RadioUnchecked from './RadioUnchecked';
import renderIcon, { IconKey } from './renderIcon';
import Repeat from './Repeat';
import Search from './Search';
import Settings from './Settings';
import ShareFilled from './ShareFilled';
import Shuffle from './Shuffle';
import SkipNext from './SkipNext';
import SkipPrevious from './SkipPrevious';
import VolumeDown from './VolumeDown';
import VolumeMute from './VolumeMute';
import VolumeOff from './VolumeOff';
import VolumeUp from './VolumeUp';

export {
  BookmarkOutline,
  Check,
  ChevronRight,
  Clear,
  Discovery,
  FBLogo,
  GLogo,
  Library,
  MoreHorizontal,
  PlayCircleOutline,
  PlaylistAdd,
  PlayOutline,
  PauseCircleOutline,
  RadioChecked,
  RadioUnchecked,
  Repeat,
  renderIcon,
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
};
export type { IconKey };

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  style?: any;
}
