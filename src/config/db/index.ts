import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config()

const db = new pg.Pool({
    host: process.env.HOST,
    port: 5432,
    user: 'ziipikwn',
    password: process.env.PASSWORD,
    database: 'ziipikwn',
});

export default db;