"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validRegisterSchema = exports.validLoginSchema = exports.validUserSchema = exports.registerEmailValidation = exports.registerPasswordValidation = exports.invalidEmail = exports.passwordNotLongEnough = exports.emailNotLongEnough = void 0;
const yup = require("yup");
exports.emailNotLongEnough = "email must be at least 3 characters";
exports.passwordNotLongEnough = "password must be at least 3 characters";
exports.invalidEmail = "email must be a valid email";
exports.registerPasswordValidation = yup
    .string()
    .min(3, exports.passwordNotLongEnough)
    .max(255)
    .required();
exports.registerEmailValidation = yup
    .string()
    .min(3, exports.emailNotLongEnough)
    .max(255)
    .email(exports.invalidEmail)
    .required();
exports.validUserSchema = yup.object().shape({
    email: exports.registerEmailValidation,
    rememberme: yup.boolean()
        .required(),
    password: exports.registerPasswordValidation
});
exports.validLoginSchema = yup.object().shape({
    email: exports.registerEmailValidation,
    rememberme: yup.boolean()
        .required(),
    password: exports.registerPasswordValidation
});
exports.validRegisterSchema = yup.object().shape({
    email: exports.registerEmailValidation,
    firstName: yup.string().min(2).max(255).required(),
    lastName: yup.string().min(2).max(255).required(),
    password: exports.registerPasswordValidation
});
//# sourceMappingURL=index.js.map