import '@/styles/globals.css';
import Head from 'next/head';
import { NotificationContextProvider } from '@/store/notification-context';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
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
      </Layout>
    </NotificationContextProvider>
  );
}
