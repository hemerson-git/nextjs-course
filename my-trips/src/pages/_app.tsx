import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogressbar from 'nextjs-progressbar';
import SEO from '../../next-seo.config';

import GlobalStyles from 'styles/global';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="google-site-verification"
          content="ys5_lX-3SwdhbIg5A4eSox0usX1N_sfmf7RYQUjOnaA"
        />
      </Head>

      <DefaultSeo {...SEO} />

      <GlobalStyles />
      <NextNprogressbar
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}
