import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const invalidEmail = "email must be a valid email";

export const registerPasswordValidation = yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required();

export const registerEmailValidation = yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required();

export const validUserSchema = yup.object().shape({
    email: registerEmailValidation,
    rememberme: yup.boolean()
        .required(),
    password: registerPasswordValidation
});

export const validLoginSchema = yup.object().shape({
    email: registerEmailValidation,    
    rememberme: yup.boolean()
        .required(),
    password: registerPasswordValidation
})
export const validRegisterSchema = yup.object().shape({
    email: registerEmailValidation,   
    firstName: yup.string().min(2).max(255).required(),
    lastName: yup.string().min(2).max(255).required(),    
    password: registerPasswordValidation
})