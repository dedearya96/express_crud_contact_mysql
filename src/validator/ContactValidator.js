import { check } from "express-validator";

export const createContactValidator = [
    check('name').notEmpty(),
    check('email').notEmpty(),
    check('phone').notEmpty()
];