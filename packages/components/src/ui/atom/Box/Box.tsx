import React, { FC, ReactNode } from 'react'
import { View, Animated, FlexAlignType, StyleSheet } from 'react-native'
import { useRnwToHtml } from '../../../hooks'
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
  accessibilityRole?: string
  align?: FlexAlignType | undefined
  animated?: boolean
  as?: string
  asProps?: any
  children?: ReactNode
  justify?: Justify
  orientation?: Orientation
  style?: any
  wrap?: boolean
}

const Box: FC<BoxProps> = ({
  accessibilityRole,
  align,
  animated = false,
  as,
  asProps,
  children,
  justify,
  orientation = 'column',
  style,
  wrap,
}) => {
  const styles = generateStyles(align, justify, orientation)
  const props = {
    children,
    style: clsx([{ display: 'flex' }, styles.box, wrap && styles.wrap, style]),
    ...asProps,
  }
  const { Component } = useRnwToHtml(as, props)

  if (Component) {
    return <>{Component}</>
  }

  return (
    <>
      {animated ? (
        <Animated.View style={clsx([styles.box, wrap && styles.wrap, style])}>
          {children}
        </Animated.View>
      ) : (
        <View
          accessibilityRole={(accessibilityRole as any) || undefined}
          style={[styles.box, wrap && styles.wrap, style]}
        >
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
      flexDirection: orientation,
      justifyContent: justify,
    },
    wrap: {
      flexWrap: 'wrap',
    },
  })
}
