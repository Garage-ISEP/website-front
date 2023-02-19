import { GlobalState } from '@/Contexts/GlobalContext/GlobalStatet';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';
import { AppFooter } from '@/components/AppFooter/AppFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <ThemeProvider>
        <Component {...pageProps} />
        <AppFooter />
      </ThemeProvider>
    </GlobalState>
  );
}
