import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
