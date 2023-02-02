const { MongoClient } = require('mongodb');

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:EDQV5MHGEQUjbRZW@cluster0.r5s0bwx.mongodb.net/events?retryWrites=true&w=majority',
  );

  const db = client.db();

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || !text) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    const newComment = {
      email,
      text,
      name,
      eventId,
    };

    const result = await db.collection('comments').insertOne(newComment);

    newComment.id = result.insertedId;

    res.status(201).json({ message: 'Added Comment', comment: newComment });
    return;
  }

  if (req.method === 'GET') {
    const documents = await db
      .collection('comments')
      .find({ eventId: eventId })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  await client.close();
}
