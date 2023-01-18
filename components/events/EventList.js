import { EventItem } from '@/components/events/EventItem';

import classNames from './EventList.module.css';

export const EventList = props => {
  const { items } = props;

  return (
    <ul className={classNames.list}>
      {items.map(event => {
        const { title, description, image, location, id } = event;
        return (
          <EventItem
            description={description}
            id={id}
            image={image}
            key={id}
            location={location}
            title={title}
          />
        );
      })}
    </ul>
  );
};
