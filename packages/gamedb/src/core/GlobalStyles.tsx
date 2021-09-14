import { createGlobalStyle, css } from 'styled-components'

import 'normalize.css'
import 'system-font-css'

const globalStyles = css`
  html {
    box-sizing: border-box;
    font-size: calc(10px + .25vw);
  }
  body {
    font-family: system-ui,serif;
    background: #ededed;
  }
  .wmde-markdown {
    line-height: 1.15 !important;
    font-size: 1rem !important;
  }
  .tox {
    display: none;
  }
`

const GlobalStyles = createGlobalStyle`${globalStyles}`

export default GlobalStyles
