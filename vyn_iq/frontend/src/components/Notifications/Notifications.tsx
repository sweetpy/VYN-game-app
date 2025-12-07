import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './Notifications.css';

interface Notification {
  id: number;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    axios.get('/api/notifications/')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));
  };

  const handleMarkAsRead = (notificationId: number) => {
    axios.patch(`/api/notifications/${notificationId}/`, { read: true })
      .then(() => fetchNotifications())
      .catch(error => console.error('Error marking notification as read:', error));
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className={`notification ${notif.read ? 'read' : ''}`}>
            <h3>{notif.title}</h3>
            <p>{notif.message}</p>
            <small>{new Date(notif.created_at).toLocaleString()}</small>
            {!notif.read && (
              <button onClick={() => handleMarkAsRead(notif.id)}>Mark as Read</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
