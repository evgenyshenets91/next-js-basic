import { useRef } from 'react';

export default function NewComment(props) {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const nameInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    props.onAddComment({
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      text: feedbackInputRef.current.value,
    });

    // clean fields after success adding comment
    emailInputRef.current.value = '';
    nameInputRef.current.value = '';
    feedbackInputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={'email'}>Your Email Address</label>
        <input id={'email'} ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor={'name'}>Your Name</label>
        <input type={'text'} id={'name'} ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor={'feedback'}>Your feedback</label>
        <textarea id={'text'} rows={5} ref={feedbackInputRef} />
      </div>
      <button>Send Feedback</button>
    </form>
  );
}
