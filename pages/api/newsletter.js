const { MongoClient } = require('mongodb');

async function connectDataBase() {
  return await MongoClient.connect(
    'mongodb+srv://dbUser:EDQV5MHGEQUjbRZW@cluster0.r5s0bwx.mongodb.net/events?retryWrites=true&w=majority',
  );
}

async function insertDocument(client, document) {
  const db = client.db();

  await db.collection('newsletter').insertOne(document);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (!email || !email.includes('@')) {
      req.status(422).json({ message: 'Invalid Address.' });
      return;
    }

    try {
      const client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: 'Connection to DB failed' });
      return;
    }

    try {
      const client = await connectDataBase();
      await insertDocument(client, { email });
      await client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' });
      return;
    }

    res.status(201).json({ message: 'Signed Up!' });
  }
}
