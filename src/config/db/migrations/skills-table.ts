const SkillsTable = `
    CREATE TABLE IF NOT EXISTS skills (
        id serial PRIMARY KEY,
        name varchar(255),
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`;

export default SkillsTable;