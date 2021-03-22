import '../styles/globals.scss'
import React from 'react';
import {wrapper} from '../store/index';
import App from 'next/app';

// const MyApp = ({ Component, pageProps }) => {
 
//   return (
//     <Component {...pageProps} />
//   )
// }

// export default wrapper.withRedux(MyApp);

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
      return {
          pageProps: {
              // Call page-level getInitialProps
              ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
          }
      };
  }

  render() {
      const {Component, pageProps} = this.props;
      return (
          <Component {...pageProps} />
      );
  }

}

export default wrapper.withRedux(MyApp);
