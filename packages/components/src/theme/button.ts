import color from './color'
import spacing from './spacing'

const { BLACK, BLUE_500, BLUE_FB, WHITE } = color
const { LINEAR_MD } = spacing

const baseButton = {
  alignItems: 'center',
  // borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: 2,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: 40,
  paddingLeft: LINEAR_MD,
  paddingRight: LINEAR_MD,
  width: '100%',
}

const partialStyles = {
  // facebook: {
  //   backgroundColor: BLUE_FB,
  //   borderColor: BLUE_FB,
  //   span: {
  //     color: WHITE,
  //   },
  // },
  // google: {
  //   backgroundColor: WHITE,
  //   borderColor: WHITE,
  //   span: {
  //     color: BLACK,
  //   },
  // },
  // link: {
  //   backgroundColor: 'transparent',
  //   borderColor: 'transparent',
  //   borderWidth: 0,
  //   height: 'auto',
  //   padding: 0,
  //   width: 'auto',
  //   '& *': {
  //     cursor: 'pointer',
  //   },
  // },
  // plain: {
  //   height: 'auto',
  //   width: 'auto',
  // },
  // primary: {
  //   backgroundColor: BLUE_500,
  //   borderColor: BLUE_500,
  //   span: {
  //     color: WHITE,
  //   },
  // },
  // secondary: {
  //   backgroundColor: WHITE,
  //   borderColor: BLUE_500,
  //   span: {
  //     color: BLUE_500,
  //   },
  // },
  // transparent: {
  //   backgroundColor: 'transparent',
  //   borderColor: 'transparent',
  //   borderWidth: 0,
  //   height: 'auto',
  //   padding: 0,
  //   width: 'auto',
  // },
}

const buttonStyles = { baseButton, ...partialStyles }

export default buttonStyles

export type TButtonStyles = Record<TButtonKeys, any>

export type TButtonKeys =
  | 'baseButton'
  | 'facebook'
  | 'google'
  | 'link'
  | 'plain'
  | 'primary'
  | 'secondary'
  | 'transparent'
