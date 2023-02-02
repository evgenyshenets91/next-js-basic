export default function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || !text) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      text,
      name,
    };

    res.status(201).json({ message: 'Added Comment', comment: newComment });
    return;
  }

  if (req.method === 'GET') {
    const list = [
      { id: 'c1', name: 'Max', text: 'First comment here' },
      { id: 'c2', name: 'Ivan', text: 'Second comment here' },
    ];

    res.status(200).json({ comments: list });
  }
}
