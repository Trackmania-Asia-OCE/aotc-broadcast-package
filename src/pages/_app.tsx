import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { trpc } from '~/utils/trpc';
import nextI18NextConfig from '../../next-i18next.config.js';

import '~/styles/fonts.css';
import '~/styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default trpc.withTRPC(appWithTranslation(MyApp, nextI18NextConfig));
