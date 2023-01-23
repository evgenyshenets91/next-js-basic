import { getAllEvents, getEventById } from '@/helpers/api-util';
import Head from 'next/head';
import classNames from '@/components/events/EventItem.module.css';
import Image from 'next/image';

export default function EventDetailsPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return <p>Loading...</p>;
  }

  const { description, image, id, location, title } = event;

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta name={'description'} content={event.description} />
      </Head>
      <h1>Event Details Page:</h1>
      <p>{title}</p>
      <p>{description}</p>
      <p>{location}</p>
      <Image
        className={classNames.image}
        width={400}
        height={300}
        alt={title}
        src={'/' + image}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  return {
    props: {
      selectedEvent: event,
    },
    notFound: !event,
    revalidate: 30,
  };
}
