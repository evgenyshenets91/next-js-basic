import classes from './Notification.module.css';
import { useContext } from 'react';
import NotificationContext from '@/store/notification-context';

export const STATUS_CODE = {
  success: 'success',
  error: 'error',
  pending: 'pending',
};

export default function Notification(props) {
  const { title, status, message } = props;

  const notificationContext = useContext(NotificationContext);

  let statusClasses = '';

  switch (status) {
    case STATUS_CODE.success: {
      statusClasses = classes.success;
      break;
    }
    case STATUS_CODE.pending: {
      statusClasses = classes.pending;
      break;
    }
    case STATUS_CODE.error: {
      statusClasses = classes.error;
      break;
    }
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div
      className={activeClasses}
      onClick={notificationContext.hideNotification}
    >
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
}
