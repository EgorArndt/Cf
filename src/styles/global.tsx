import { Global, css } from '@emotion/react'
import { AppTheme } from './theme/models'

const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      @import url('https://fonts.googleapis.com/css2?family=Corinthia:wght@700&family=Inter:wght@100;300;400&family=Lato&family=Roboto:ital,wght@0,900;1,900&display=swap');

      * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
      }

      ul {
        list-style: none;
      }

      html,
      body,
      #__next {
        height: 100%;
        overflow-x: hidden;
      }

      body,
      #__next {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        font-family: 'Lato', sans-serif;
        font-size: ${(theme as AppTheme).readonly.fontSize('body2')};
        background-color: ${(theme as AppTheme).mutatable.global.bg};
        color: ${(theme as AppTheme).mutatable.global.contrastText};
      }
    `}
  />
)

export default GlobalStyles
