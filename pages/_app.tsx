import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import type { AppProps } from 'next/app'
import React from 'react';
import {Layout} from '../Components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
