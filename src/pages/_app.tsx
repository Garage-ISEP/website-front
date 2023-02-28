import { GlobalState } from '@/Contexts/GlobalContext/GlobalStatet';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppFooter } from '@/components/AppFooter/AppFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          viewport-fit="cover"
        />
        <link rel="icon" href="/Garage-logo.svg" />
      </Head>{' '}
      <GlobalState>
        <div className="bg-gray-100">
          <Component {...pageProps} />
          <AppFooter />
        </div>
      </GlobalState>{' '}
    </>
  );
}
