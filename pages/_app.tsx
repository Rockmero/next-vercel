import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPAgeWithLayout = NextPage & {
  getLayout?: (page:ReactElement) =>ReactNode;
}

type AppPropsWithLayout = AppProps &{
  Component: NextPAgeWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />


  return getLayout(<Component {...pageProps} />)
}

export default  App