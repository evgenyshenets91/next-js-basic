export default function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (!email || !email.includes('@')) {
      req.status(422).json({ message: 'Invalid Address.' });
      return;
    }

    res.status(201).json({ message: 'Signed Up!' });
  }
}
