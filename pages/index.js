import { EventList } from '@/components/events/EventList';
import { getAllEvents } from '@/helpers/api-util';
import Head from 'next/head';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name={'description'}
          content={'Find a lot of great events that allow to evolve...'}
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}
