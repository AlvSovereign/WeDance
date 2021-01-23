export const heading = {
  mobile: {
    hero: {
      fontSize: 48,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '48px',
    },
    h1: {
      fontSize: 36,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '36px',
    },
    h2: {
      fontSize: 32,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '32px',
    },
    h3: {
      fontSize: 24,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '24px',
    },
    h4: {
      fontSize: 20,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '20px',
    },
    h5: {
      fontSize: 16,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '16px',
    },
    h6: {
      fontSize: 12,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '12px',
    },
  },
  desktop: {
    hero: {
      fontSize: 64,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '64px',
    },
    h1: {
      fontSize: 48,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '48px',
    },
    h2: {
      fontSize: 36,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '36px',
    },
    h3: {
      fontSize: 28,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '28px',
    },
    h4: {
      fontSize: 24,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '24px',
    },
    h5: {
      fontSize: 20,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '20px',
    },
    h6: {
      fontSize: 16,
      fontFamily: 'Geomanist-Medium',
      lineHeight: '16px',
    },
  },
}

export const Text = {
  inputError: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    lineHeight: '12px',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Geomanist-Medium',
    lineHeight: '14px',
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'Geomanist',
    letterSpacing: 0.2,
    lineHeight: '16px',
  },
  button: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 1.5,
    lineHeight: '12px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Geomanist-Bold',
    lineHeight: '14px',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Geomanist-Bold',
    lineHeight: '12px',
  },
  lead: {
    fontSize: 16,
    fontFamily: 'Geomanist-Light',
    lineHeight: '16px',
  },
  body1: {
    fontSize: 14,
    fontFamily: 'Geomanist-Book',
    lineHeight: '14px',
  },
  body2: {
    fontSize: 12,
    fontFamily: 'Geomanist-Book',
    lineHeight: '12px',
  },
  small: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    lineHeight: '12px',
  },
  tiny: {
    fontSize: 10,
    fontFamily: 'Geomanist',
    lineHeight: '10px',
  },
  stats: {
    fontSize: 30,
    fontFamily: 'Geomanist-Light',
    lineHeight: '30px',
  },
}

export default Text

type TTextTypes =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inputError'
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
