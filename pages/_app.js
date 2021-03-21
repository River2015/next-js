import '../styles/globals.scss'
import React from 'react';
import {wrapper} from '../store/index'

const MyApp = ({ Component, pageProps }) => {
  console.log(pageProps)
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
