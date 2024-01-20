import express from 'express';
import dotenv from 'dotenv';

import runDbMigrations from './src/config/db/migrations'
import candidatesRouter from './src/routes/candidates.routes';
import skillsRouter from './src/routes/skills.routes';
import candidatesSkillsRouter from './src/routes/candidate-skills.routes'

dotenv.config();
const PORT = process.env.PORT;
const app = express();

async function start() {
    await runDbMigrations();

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        res.status(200).send('welcome to basic recruiter server')
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.use('/api', candidatesRouter);
app.use('/api', skillsRouter);
app.use('/api', candidatesSkillsRouter);

start()