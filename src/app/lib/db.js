// lib/db.js
import mysql from 'mysql2/promise';

export async function query({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.execute(query, values);
    connection.end();
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    connection.end();
    throw error;
  }
}