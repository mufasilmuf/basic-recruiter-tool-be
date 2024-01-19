import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.get('/', async (req, res) => {
    try {
        res.status(200).send('welcome to basic recruiter server')
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});