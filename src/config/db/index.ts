import pg from 'pg';

const db = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Mufeeth01',
    database: 'recruiter_tool_db',
});

export default db;