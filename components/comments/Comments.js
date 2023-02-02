import NewComment from '@/components/comments/NewComment';
import { useEffect, useState } from 'react';

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('/api/comments/' + props.eventId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setComments(data.comments);
      });
  }, []);

  const onAddCommentHandler = async commentData => {
    const response = await fetch('/api/comments/' + props.eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setComments(prev => {
      return [...prev, data.comment];
    });
  };

  return (
    <section>
      <NewComment onAddComment={onAddCommentHandler} />
      {comments && (
        <ul>
          {comments.map(el => {
            return (
              <li key={el._id}>
                {el.email}: {el.text}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
