import SkillsModel from "../models/skills.model";

class SkillsService {
    private skillsModel: SkillsModel;

    constructor() {
        this.skillsModel = new SkillsModel();
    }

    public async getSkills() {
        return await this.skillsModel.getSkills();
    }

    public async addSkills(skillName: string) {
        return await this.skillsModel.addSkills(skillName)
    }

}

export default SkillsService;