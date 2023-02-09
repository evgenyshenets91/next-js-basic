import { Fragment, useContext } from 'react';
import Notification from '@/components/notification/Notification';
import NotificationContext from '@/store/notification-context';

export default function Layout(props) {
  const notificationContext = useContext(NotificationContext);
  const activeNotification = notificationContext.notification;

  return (
    <Fragment>
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}
