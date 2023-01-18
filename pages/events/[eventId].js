import { useRouter } from 'next/router';
import { getEventById } from '@/data';

export default function EventDetailsPage() {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <p>No event found!</p>;
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
