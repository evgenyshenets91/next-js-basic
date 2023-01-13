import { EventList } from '@/components/events/EventList';
import { getFeaturedEvents } from '@/data';

export default function Home() {
  const featuredEvent = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvent} />
    </div>
  );
}
