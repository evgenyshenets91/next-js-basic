const { MongoClient } = require('mongodb');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (!email || !email.includes('@')) {
      req.status(422).json({ message: 'Invalid Address.' });
      return;
    }

    const client = await MongoClient.connect(
      'mongodb+srv://dbUser:EDQV5MHGEQUjbRZW@cluster0.r5s0bwx.mongodb.net/?retryWrites=true&w=majority',
    );

    const db = client.db();

    await db.collection('email').insertOne({ email: email });

    await client.close();

    res.status(201).json({ message: 'Signed Up!' });
  }
}
