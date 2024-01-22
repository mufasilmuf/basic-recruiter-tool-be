import { body } from 'express-validator';

export const addSkillValidationRules = [
    body('name').trim().notEmpty().withMessage('Name is required'),
];

export const addCandidateValidationRules = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Invalid email address'),
    body('phone').trim().notEmpty().withMessage('Phone is required'),
    body('qualification').trim().notEmpty().withMessage('Qualification is required'),
    body('currentStatus').trim().notEmpty().withMessage('Current Status is required'),
    body('expectedSalary').isNumeric().withMessage('Expected Salary must be a number'),
    body('skillIds').isArray({ min: 1 }).withMessage('At least one skill is required'),
];

export const addCandidateSkillsValidationRules = [
    body('skillData.*.candidateId').isInt().withMessage('Candidate ID must be an integer'),
    body('skillData.*.skillId').isInt().withMessage('Skill ID must be an integer'),
    body('skillData.*.experience').isInt().withMessage('Experience must be an integer'),
];


