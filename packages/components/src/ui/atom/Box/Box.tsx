import React, { FC, ReactNode } from 'react'
import {
  View,
  Animated,
  FlexAlignType,
  StyleSheet,
  ViewProps,
  StyleProp,
} from 'react-native'
import { clsx } from '../../../utils'

export type Orientation = 'row' | 'column'
export type Justify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined

interface BoxProps {
  align?: FlexAlignType | undefined
  animated?: boolean
  children?: ReactNode
  justify?: Justify
  orientation?: Orientation
  forwardStyles?: StyleProp<ViewProps> // nneded for Nextjs ssr to work
  wrap?: boolean
}

const Box: FC<BoxProps> = ({
  align,
  animated = false,
  children,
  justify,
  orientation = 'column',
  forwardStyles,
  wrap,
}) => {
  const styles = generateStyles(align, justify, orientation)

  return (
    <>
      {animated ? (
        <Animated.View
          style={clsx([styles.box, wrap && styles.wrap, forwardStyles])}
        >
          {children}
        </Animated.View>
      ) : (
        <View style={[styles.box, wrap && styles.wrap, forwardStyles]}>
          {children}
        </View>
      )}
    </>
  )
}

export default Box

const generateStyles = (
  align: FlexAlignType | undefined,
  justify: Justify,
  orientation: Orientation,
) => {
  return StyleSheet.create({
    box: {
      alignItems: align,
      display: 'flex',
      flexDirection: orientation,
      justifyContent: justify,
    },
    wrap: {
      flexWrap: 'wrap',
    },
  })
}
