import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const VolumeMute = ({
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M7 9v6h4l5 5V4l-5 5H7z' />
    </Svg>
  );
};

const MemoVolumeMute = React.memo(VolumeMute);
export default MemoVolumeMute;
