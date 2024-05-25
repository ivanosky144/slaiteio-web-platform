import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/authStore';
import Head from 'next/head';

const inter = Inter({
  weight: ['400', '500', '700'],
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
            font-family: ${inter.style.fontFamily};
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
