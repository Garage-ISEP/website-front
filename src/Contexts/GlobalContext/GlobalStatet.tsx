import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import PageNotFound from '@/pages/not-found';

interface Props {
  children: React.ReactNode;
}

export const GlobalState: FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const path = router.pathname;
  const validRoutes = [
    '/silicon-days',
    '/#contact',
    '/',
  ];

  useEffect(() => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  
  useEffect(() => {
    if (!validRoutes.includes(path)){
      router.push('/not-found');
    }
  },[path]);

  const goToPath = (path: string) => {
    router.push(path);
  };

  const goToExternalUrl = (url: string) => {
    window.location.replace(url);
  };

  const getPath = (): string => {
    console.log(router);
    return router.pathname;
  };

  return (
    <GlobalContext.Provider
      value={{ path, goToPath, goToExternalUrl, getPath, isMobile}}
    >
      {children}
    </GlobalContext.Provider>
  );
};
