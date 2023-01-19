import '@/styles/globals.css';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>NextJS default page</title>
        <meta
          name={'description'}
          content={'Find a lot of great events that allow to evolve...'}
        />
        <meta
          name={'viewport'}
          content={'initial-scale=1.0, width=device-width'}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
