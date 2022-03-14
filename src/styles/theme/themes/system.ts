import { AppTheme } from '../models'
import { setSpacing, setFontSize } from '../utils'

export const System: AppTheme = {
  mutatable: {
    global: {
      bg: '#fff',
      bgOnHover: null,
      contrastText: '#696969',
      textOnHover: null,
    },
    textColors: {
      primary: '#000',
      secondary: '#292929',
      tertiary: '#666',
      disabled: '#8c8c8c',
    },
    border: '#eaeaea',
    boxShadow: '0 0 15px 0 rgb(0 0 0 / 10%);',
    wrapperPalettes: {
      primary: {
        bg: '#fff',
        bgOnHover: '#eeeeee',
        contrastText: '#292929',
        textOnHover: null,
      },
      secondary: {
        bg: '#f7f7f7',
        bgOnHover: '#eeeeee',
        contrastText: '#000',
        textOnHover: null,
      },
      tertiary: {
        bg: '#eee',
        bgOnHover: null,
        contrastText: '#000',
        textOnHover: null,
      },
    },
    ui: {
      button: {
        primary: {
          bg: '#fff',
          bgOnHover: '#eeeeee',
          contrastText: '#000',
          textOnHover: '#000',
        },
      },
    },
  },
  readonly: {
    breakpoints: {
      xs: '(max-width: 320px)',
      s: '(max-width: 768px)',
      m: '(max-width: 1366px)',
    },
    zIndex: {
      modal: 10002,
      popup: 10001,
      appLayout: 10000,
    },
    fonts: {
      primary: 'Lato',
      secondary: 'sans-serif',
    },
    transition: '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    spacing: (factor) => setSpacing(factor),
    fontSize: (fontSize) => setFontSize(fontSize),
    commonColors: {
      disabled: {
        bg: '#fafafa',
        bgOnHover: null,
        contrastText: '#666',
        textOnHover: null,
      },
      yellow: {
        bg: '##ffb300',
        bgOnHover: null,
        contrastText: '#fff',
        textOnHover: null,
      },
      error: {
        bg: '#f44336',
        bgOnHover: '#d32f2f',
        contrastText: '#fff',
        textOnHover: null,
      },
      warning: {
        bg: '#ef6c00',
        bgOnHover: '#f57c00',
        contrastText: '#fff',
        textOnHover: null,
      },
      info: {
        bg: '#3971c1',
        bgOnHover: null,
        contrastText: '#fff',
        textOnHover: null,
      },
      success: {
        bg: '#4eb495',
        bgOnHover: '#388e3c',
        contrastText: '#fff',
        textOnHover: null,
      },
    },
  },
}
