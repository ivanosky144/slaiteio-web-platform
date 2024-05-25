import { AppProps } from 'next/app';
import { Roboto, Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/authStore';
import Head from 'next/head';

const inter = Inter({
  weight: ['500'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== '/login') {
      router.push('/login');
    } 
  }, [isLoggedIn, router])

  return (
    <>
      <Head>
        <title>Slaite.io</title>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
