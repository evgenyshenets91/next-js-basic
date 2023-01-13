import Link from 'next/link';

import classNames from './EventItem.module.css';

export const EventItem = props => {
  const { title, description, image, location, id } = props;

  return (
    <li>
      <p className={classNames.title}>{title}</p>
      <p>{description}</p>
      <p>{location}</p>
      <img className={classNames.image} alt={title} src={'/' + image} />
      <div>
        <Link href={`/events/${id}`}>Explore event</Link>
      </div>
    </li>
  );
};
