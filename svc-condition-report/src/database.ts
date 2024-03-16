// database.js

import { Client } from 'pg'

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432
})

client.connect()

export default client
