import { query } from '../../lib/db';


export async function POST(req) {
  console.log('API route hit!');
  const body = await req.json();
  console.log('Request body received:', body); 
  const { fullName, contactNumber, emailAddress, comment } = body;

  // --- Basic Server-Side Validation ---
  if (!fullName || !contactNumber || !emailAddress) {
    // This needs to be a proper Response object
    return new Response(JSON.stringify({ message: 'Missing required fields: Full Name, Contact Number, and Email Address are mandatory.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Execute the database query to insert the form data
    const result = await query({
      query: 'INSERT INTO contacts (full_name, contact_number, email_address, comment) VALUES (?, ?, ?, ?)',
      values: [fullName, contactNumber, emailAddress, comment || null],
    });

    // This needs to be a proper Response object
    return new Response(JSON.stringify({ message: 'Form submitted successfully!', result }), {
      status: 201, // Use 201 for Created
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Log the detailed error to the server console for debugging
    console.error('Error submitting form to database:', error);

    // This needs to be a proper Response object
    return new Response(JSON.stringify({ message: 'Internal server error. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
