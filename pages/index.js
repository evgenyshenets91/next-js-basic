import { EventList } from '@/components/events/EventList';
import { getAllEvents } from '@/helpers/api-util';

export default function Home(props) {
  return (
    <div>
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
  };
}
