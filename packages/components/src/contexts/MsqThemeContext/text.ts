export const heading = {
  mobile: {
    hero: {
      fontSize: 48,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 48,
    },
    h1: {
      fontSize: 36,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 36,
    },
    h2: {
      fontSize: 32,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 32,
    },
    h3: {
      fontSize: 24,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 24,
    },
    h4: {
      fontSize: 20,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 20,
    },
    h5: {
      fontSize: 16,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 16,
    },
    h6: {
      fontSize: 12,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 12,
    },
  },
  desktop: {
    hero: {
      fontSize: 64,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 64,
    },
    h1: {
      fontSize: 48,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 48,
    },
    h2: {
      fontSize: 36,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 36,
    },
    h3: {
      fontSize: 28,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 28,
    },
    h4: {
      fontSize: 24,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 24,
    },
    h5: {
      fontSize: 20,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 20,
    },
    h6: {
      fontSize: 16,
      fontFamily: 'Geomanist-Medium',
      lineHeight: 16,
    },
  },
}

export const text = {
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Geomanist-Medium',
    lineHeight: 14,
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'Geomanist',
    letterSpacing: 0.2,
    lineHeight: 16,
  },
  button: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 1.5,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Geomanist-Bold',
    lineHeight: 14,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Geomanist-Bold',
    lineHeight: 12,
  },
  lead: {
    fontSize: 16,
    fontFamily: 'Geomanist-Light',
    lineHeight: 16,
  },
  body1: {
    fontSize: 14,
    fontFamily: 'Geomanist-Book',
    lineHeight: 14,
  },
  body2: {
    fontSize: 12,
    fontFamily: 'Geomanist-Book',
    lineHeight: 12,
  },
  small: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    lineHeight: 12,
  },
  tiny: {
    fontSize: 10,
    fontFamily: 'Geomanist',
    lineHeight: 10,
  },
  stats: {
    fontSize: 30,
    fontFamily: 'Geomanist-Light',
    lineHeight: 30,
  },
}

export default text

type TTextTypes =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inputLabel'
  | 'inputText'
  | 'title'
  | 'subtitle'
  | 'lead'
  | 'body1'
  | 'body2'
  | 'small'
  | 'stats'
  | 'tiny'
  | 'button'

export type TText = { [key in TTextTypes]: any }
