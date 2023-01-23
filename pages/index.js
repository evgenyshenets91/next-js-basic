import { EventList } from '@/components/events/EventList';
import { getAllEvents } from '@/helpers/api-util';
import Head from 'next/head';
import { useRef } from 'react';

export default function Home(props) {
  const emailRef = useRef();

  const registrationHandler = event => {
    event.preventDefault();

    fetch('api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());
  };

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name={'description'}
          content={'Find a lot of great events that allow to evolve...'}
        />
      </Head>
      <form onSubmit={registrationHandler}>
        <div style={{ display: 'flex' }}>
          <div>
            <label htmlFor={'email'}>Sign Up</label>
            <input type={'email'} id={'email'} ref={emailRef} />
          </div>
          <button>Send Feedback</button>
        </div>
      </form>
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
