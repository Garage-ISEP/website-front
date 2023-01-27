import { GlobalState } from '@/Contexts/GlobalContext/GlobalStatet';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalState>
  );
}
