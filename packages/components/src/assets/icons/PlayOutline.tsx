import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IIcon } from '.'

const PlayOutline = ({
  className,
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg
      className={className}
      fill={fill}
      height={height}
      style={style}
      width={width}
      viewBox="0 0 24 24"
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
    </Svg>
  )
}

const MemoPlayOutline = React.memo(PlayOutline)
export default MemoPlayOutline
