const CandidateSkillsTable = `
    CREATE TABLE IF NOT EXISTS candidateSkills (
        id serial PRIMARY KEY,
        candidate_id integer REFERENCES Candidates(id) ON DELETE CASCADE,
        skill_id integer REFERENCES Skills(id),
        experience decimal,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`;

export default CandidateSkillsTable;
