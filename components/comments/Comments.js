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

  console.log('# comments', comments);

  const onAddCommentHandler = async commentData => {
    await fetch('/api/comments/' + props.eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <section>
      <NewComment onAddComment={onAddCommentHandler} />
      {comments && (
        <ul>
          {comments.map(el => {
            return (
              <li key={el.id}>
                {el.name}: {el.text}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
