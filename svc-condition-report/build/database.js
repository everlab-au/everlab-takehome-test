"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectWithRetry = () => {
    const client = new pg_1.Client({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres',
        database: process.env.DB_NAME || 'postgres',
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432
    });
    // eslint-disable-next-line no-constant-condition
    while (true) {
        try {
            client.connect();
            console.log('Connected to PostgreSQL');
            break; // Exit loop if connection successful
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (error) {
            console.error('Error connecting to PostgreSQL:', error.message);
            console.log('Retrying connection in 2 seconds...');
            new Promise((resolve) => setTimeout(resolve, 2000)); // Retry after 2 seconds
        }
    }
    return client;
};
const client = connectWithRetry();
exports.default = client;
