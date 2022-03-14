import { AppContext, AppInitialProps, MyAppProps } from 'next/app'
import type { NextComponentType } from 'next'

import { Header } from '@layouts/base'
import GlobalStyles from 'styles/global'
import Theme from 'styles/theme'
import 'components/ui/menu/menu.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

const MyApp: NextComponentType<AppContext, AppInitialProps, MyAppProps> = ({
  Component,
  pageProps,
}: MyAppProps) => {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
