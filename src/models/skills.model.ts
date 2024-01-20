import db from "../config/db";

class SkillsModel {
    public async getSkills() {
        return await db.query(`SELECT * FROM skills`);
    }

    public async addSkills(skillName: any) {
        return await db.query(`INSERT INTO skills (name) VALUES ($1) RETURNING *`, [skillName])
    }
}

export default SkillsModel;