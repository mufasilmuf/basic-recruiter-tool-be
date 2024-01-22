const CandidatesTable = `
    CREATE TABLE IF NOT EXISTS candidates (
        id serial PRIMARY KEY,
        name varchar(255),
        email varchar(255),
        phone varchar(255),
        qualification varchar(255),
        current_status varchar(255) DEFAULT 'CONTACTED' CHECK(current_status IN ('CONTACTED', 'INTERVIEW_SCHEDULED', 'OFFER_EXTENDED', 'HIRED', 'REJECTED')),
        expected_salary decimal,
        computed_score decimal,
        skillIds integer[] DEFAULT '{}'::integer[],
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`;

export default CandidatesTable;
