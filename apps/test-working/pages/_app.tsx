import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import {Cmp} from '@nx-next-yarn-workspace/components';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to test-working!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to test-working!</h1>
        </header>
        <main>
          <Cmp />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
