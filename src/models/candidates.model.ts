import db from "../config/db";

class CandidatesModel {
    public async getAllCandidates() {
        return await db.query(`
        SELECT
        candidates.id AS candidate_id,
        candidates.name,
        candidates.email,
        candidates.phone,
        candidates.qualification,
        candidates.current_status,
        candidates.expected_salary,
        candidates.computed_score,
        candidates.created_at AS candidate_created_at,
        candidates.updated_at AS candidate_updated_at,
        json_agg(
          json_build_object(
            'skill_id', skills.id,
            'name', skills.name,
            'experience', candidateSkills.experience
          )
        ) AS skills
      FROM
        candidates
      LEFT JOIN
        candidateSkills ON candidates.id = candidateSkills.candidate_id
      LEFT JOIN
        skills ON candidateSkills.skill_id = skills.id
      GROUP BY
        candidates.id, candidateSkills.experience, skills.id
      ORDER BY
        candidates.id;
        `);
    }

    public async getCandidateById(candidateId: number) {
        return await db.query(
            `
        SELECT
        candidates.id AS candidate_id,
        candidates.name,
        candidates.email,
        candidates.phone,
        candidates.qualification,
        candidates.current_status,
        candidates.expected_salary,
        candidates.computed_score,
        candidates.created_at AS candidate_created_at,
        candidates.updated_at AS candidate_updated_at,
        json_agg(
            json_build_object(
                'skill_id', skills.id,
                'name', skills.name,
                'experience', candidateSkills.experience
            )
        ) AS skills
    FROM
        candidates
    LEFT JOIN
        candidateSkills ON candidates.id = candidateSkills.candidate_id
    LEFT JOIN
        skills ON candidateSkills.skill_id = skills.id
    WHERE
        candidates.id = $1
    GROUP BY
        candidates.id, candidateSkills.experience, skills.id
    ORDER BY
        candidates.id;
        `,
            [candidateId]
        );
    }

    public async addNewCandidates(
        name: string,
        email: string,
        phone: string,
        qualification: string,
        currentStatus: string,
        expectedSalary: number,
        computedScore: number,
        skillIds: number[]
    ) {
        return await db.query(
            `
            INSERT INTO candidates (
                name, email, phone, qualification, current_status,
                expected_salary, computed_score, skillIds
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `,
            [
                name,
                email,
                phone,
                qualification,
                currentStatus,
                expectedSalary,
                computedScore,
                skillIds,
            ]
        );
    }

    public async updateCandidateById(
        candidateId: number,
        name: string,
        email: string,
        phone: string,
        qualification: string,
        currentStatus: string,
        expectedSalary: number,
    ) {
        return await db.query(
            `
        UPDATE candidates
        SET
            name = $2,
            email = $3,
            phone = $4,
            qualification = $5,
            current_status = $6,
            expected_salary = $7,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
        RETURNING *
        `,
            [
                candidateId,
                name,
                email,
                phone,
                qualification,
                currentStatus,
                expectedSalary,
            ]
        );
    }

    public async deleteCandidateById(candidateId: number) {
        return await db.query(
            `
        DELETE FROM candidates
        WHERE id = $1
        RETURNING *
      `,
            [candidateId]
        );
    }
}

export default CandidatesModel;
