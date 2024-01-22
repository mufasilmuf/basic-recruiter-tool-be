import db from "../config/db";

export const calculateComputedScore = (experience: string): number => {
    const experienceYears = parseInt(experience);

    if (experienceYears < 1) {
        return 1;
    } else if (experienceYears >= 1 && experienceYears <= 2) {
        return 2;
    } else {
        return 3;
    }
};

export const calculateAndStoreComputedScores = async (skillData: any[]) => {
    for (const data of skillData) {
        const nodeJsScore = calculateComputedScore(data.experience);
        const reactJsScore = calculateComputedScore(data.experience);

        const totalScore = nodeJsScore + reactJsScore;

        await db.query(`UPDATE candidates SET computed_score = $1 WHERE id = $2`, [
            totalScore,
            data.candidateId,
        ]);
    }
};
