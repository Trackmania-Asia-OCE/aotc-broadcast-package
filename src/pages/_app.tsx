import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import '~/styles/globals.css';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/jby4txw.css" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
