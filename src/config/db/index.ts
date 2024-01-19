import * as mysql from 'mysql2';
import * as url from 'url';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL as string;

const parsedUrl = new url.URL(DATABASE_URL);

const connection = mysql.createConnection({
    user: parsedUrl.username || 'your_username',
    password: parsedUrl.password || 'your_password',
    host: parsedUrl.hostname || 'your_host',
    database: parsedUrl.pathname.substr(1) || 'your_database',
    port: parsedUrl.port ? parseInt(parsedUrl.port, 10) : 5432,
    ssl: {
        rejectUnauthorized: true,
    },
});

const query = (sql: string, values: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const exampleQuery = async () => {
    try {
        const results = await query('SELECT 1 FROM dual WHERE ? = ?', [1, 1]);
        console.log(results);
    } catch (error) {
        console.error('Error executing query:', error);
    } finally {
        connection.end();
    }
};

export { query, connection };
