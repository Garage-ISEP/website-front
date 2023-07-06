import { GlobalState } from '@/Contexts/GlobalContext/GlobalStatet';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppFooter } from '@/components/AppFooter/AppFooter';
import { PagesAnimations } from '@/components/Animations/PagesAnimations/PagesAnimations';
import NotFound from './not-found';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './index'
import SiliconDays from './silicon-days';

export default function App({ Component, pageProps }: AppProps) {
  // Vérifier si le code s'exécute côté client
  if (typeof document === 'undefined') {
    return null; // Ou tout autre rendu pour l'environnement côté serveur
  }

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
      </GlobalState>
  
      {/*
      <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/404" element={<NotFoundPage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                    <Route path="/silicon-days" element={<SiliconDays/>}/>
                </Routes>
                    
      </BrowserRouter>
  */}
    </>
  );
}
