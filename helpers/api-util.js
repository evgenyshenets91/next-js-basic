export async function getAllEvents() {
  const res = await fetch(
    'https://signin-14d6a-default-rtdb.firebaseio.com/events.json',
  );

  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
}
