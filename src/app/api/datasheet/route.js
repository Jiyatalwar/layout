import { query } from '../../lib/db';
export async function POST(req) {
  const { name, email, company } = await req.json();

  if (!name || !email || !company) {
    return new Response(JSON.stringify({ message: 'All fields are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const result = await query({
      query: 'INSERT INTO datasheet_requests (name, email, company) VALUES (?, ?, ?)',
      values: [name, email, company],
    });

    return new Response(JSON.stringify({ message: 'Datasheet request saved!', result }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Database Error:', error);
    return new Response(JSON.stringify({ message: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
