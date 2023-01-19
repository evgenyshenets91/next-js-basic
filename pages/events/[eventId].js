import { getAllEvents, getEventById } from '@/helpers/api-util';

export default function EventDetailsPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return <p>Loading...</p>;
  }

  const { description, image, id, location, title } = event;

  return (
    <div>
      <h1>Event Details Page:</h1>
      <p>{title}</p>
      <p>{description}</p>
      <p>{location}</p>
      <img
        style={{ width: '50%', height: '50%' }}
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
