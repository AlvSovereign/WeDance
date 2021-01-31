export const heading = {
  mobile: {
    hero: {
      fontSize: 48,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '48px',
    },
    h1: {
      fontSize: 36,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '36px',
    },
    h2: {
      fontSize: 32,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '32px',
    },
    h3: {
      fontSize: 24,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '24px',
    },
    h4: {
      fontSize: 20,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '20px',
    },
    h5: {
      fontSize: 16,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '16px',
    },
    h6: {
      fontSize: 12,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '12px',
    },
  },
  desktop: {
    hero: {
      fontSize: 64,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '64px',
    },
    h1: {
      fontSize: 48,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '48px',
    },
    h2: {
      fontSize: 36,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '36px',
    },
    h3: {
      fontSize: 28,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '28px',
    },
    h4: {
      fontSize: 24,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '24px',
    },
    h5: {
      fontSize: 20,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '20px',
    },
    h6: {
      fontSize: 16,
      fontFamily: 'Geomanist',
      fontWeight: 600,
      letterSpacing: '0.2px',
      lineHeight: '16px',
    },
  },
}

export const Text = {
  inputError: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    lineHeight: '12px',
    letterSpacing: '0.2px',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Geomanist-Medium',
    lineHeight: '14px',
    letterSpacing: '0.2px',
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'Geomanist',
    lineHeight: '16px',
    letterSpacing: '0.2px',
  },
  button: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    fontWeight: 700,
    letterSpacing: '2.5px',
    lineHeight: '12px',
    textTransform: 'uppercase',
  },
  trackCardTitle: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    fontWeight: 400,
    letterSpacing: '0.3px',
    lineHeight: '12px',
  },
  trackCardPlays: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    fontWeight: 400,
    letterSpacing: '0.3px',
    lineHeight: '12px',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Geomanist',
    fontWeight: 600,
    letterSpacing: '0.2px',
    lineHeight: '14px',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    fontWeight: 600,
    letterSpacing: '0.2px',
    lineHeight: '12px',
  },
  lead: {
    fontSize: 16,
    fontFamily: 'Geomanist-Light',
    letterSpacing: '0.2px',
    lineHeight: '16px',
  },
  body1: {
    fontSize: 14,
    fontFamily: 'Geomanist',
    fontWeight: 600,
    letterSpacing: '0.2px',
    lineHeight: '14px',
  },
  body2: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    fontWeight: 600,
    letterSpacing: '0.2px',
    lineHeight: '12px',
  },
  small: {
    fontSize: 12,
    fontFamily: 'Geomanist',
    letterSpacing: '0.2px',
    lineHeight: '12px',
  },
  tiny: {
    fontSize: 10,
    fontFamily: 'Geomanist',
    letterSpacing: '0.2px',
    lineHeight: '10px',
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
  | 'subtitle'
  | 'lead'
  | 'body1'
  | 'body2'
  | 'small'
  | 'tiny'
  | 'title'
  | 'trackCard'
  | 'trackCardPlays'
  | 'trackCardTitle'
  | 'button'

export type TText = { [key in TTextTypes]: any }
