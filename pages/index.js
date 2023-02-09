import { EventList } from '@/components/events/EventList';
import { getAllEvents } from '@/helpers/api-util';
import Head from 'next/head';
import { useRef, useContext } from 'react';
import NotificationContext from '@/store/notification-context';
import { STATUS_CODE } from '@/components/notification/Notification';

export default function Home(props) {
  const emailRef = useRef();
  const notificationContext = useContext(NotificationContext);

  const registrationHandler = async event => {
    event.preventDefault();

    notificationContext.showNotification({
      title: 'Signing up',
      message: 'Registering for newsletter',
      status: STATUS_CODE.pending,
    });

    try {
      const response = await fetch('api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: emailRef.current.value }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await response.json();

      notificationContext.showNotification({
        title: 'Success',
        message: 'Successfully registered',
        status: STATUS_CODE.success,
      });

      emailRef.current.value = '';
    } catch {
      notificationContext.showNotification({
        title: 'Error!',
        message: 'Something went wrong',
        status: STATUS_CODE.error,
      });
    }
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
            <label htmlFor={'email'}>You Email: </label>
            <input type={'email'} id={'email'} ref={emailRef} />
          </div>
          <button>Sign Up</button>
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
