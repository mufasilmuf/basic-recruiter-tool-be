import db from ".."
import CandidatesTable from "./candidates-table";
import SkillsTable from "./skills-table";
import CandidateSkillsTable from "./candidate-skill-stable";

const runDbMigrations = async () => {
    console.log('BEGIN DB MIGRATION');
    const client = await db.connect()

    try {
        await client.query('BEGIN');
        await client.query(CandidatesTable);
        await client.query(SkillsTable);
        await client.query(CandidateSkillsTable);
        await client.query('COMMIT')
        console.log('END DB MIGRATION');
    } catch (e) {
        await client.query('ROLLBACK')
        console.log('DB migration failed');
        throw e
    } finally {
        client.release()
    }
}

export default runDbMigrations;