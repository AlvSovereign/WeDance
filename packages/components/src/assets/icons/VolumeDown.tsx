import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const VolumeDown = ({
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z' />
      <Path d='M0 0h24v24H0z' fill='none' />
    </Svg>
  );
};

const MemoVolumeDown = React.memo(VolumeDown);
export default MemoVolumeDown;
