import db from "../config/db";

class CandidatesModel {
    public async getAllCandidates() {
        return await db.query('SELECT * FROM candidates');
    }
}

export default CandidatesModel;