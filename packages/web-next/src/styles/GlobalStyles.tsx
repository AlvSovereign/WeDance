import { css, Global } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Geomanist-Light';
        font-weight: 400;
        src: url('/fonts/Geomanist-Light.otf') format('opentype');
      }
      @font-face {
        font-family: 'Geomanist';
        font-weight: 400;
        src: url('/fonts/Geomanist.otf') format('opentype');
      }
      @font-face {
        font-family: 'Geomanist-Book';
        font-weight: 400;
        src: url('/fonts/Geomanist-Book.otf') format('opentype');
      }
      @font-face {
        font-family: 'Geomanist-Medium';
        font-weight: 400;
        src: url('/fonts/Geomanist-Medium.otf') format('opentype');
      }
      @font-face {
        font-family: 'Geomanist-Bold';
        font-weight: 400;
        src: url('/fonts/Geomanist-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Montserrat-Bold';
        font-weight: 400;
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        font-weight: normal;
        margin: 0;
      }
    `}
  />
)

export default GlobalStyles
