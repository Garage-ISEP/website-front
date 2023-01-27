import { GlobalState } from '@/Contexts/GlobalContext/GlobalStatet';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Garage-logo.svg" />
      </Head>{' '}
      <GlobalState>
        <Component {...pageProps} />
      </GlobalState>{' '}
    </>
  );
}
