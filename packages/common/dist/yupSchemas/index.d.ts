import * as yup from "yup";
export declare const emailNotLongEnough = "email must be at least 3 characters";
export declare const passwordNotLongEnough = "password must be at least 3 characters";
export declare const invalidEmail = "email must be a valid email";
export declare const registerPasswordValidation: yup.StringSchema<string>;
export declare const registerEmailValidation: yup.StringSchema<string>;
export declare const validUserSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    rememberme: boolean;
    password: string;
}>>;
export declare const validLoginSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    rememberme: boolean;
    password: string;
}>>;
export declare const validRegisterSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}>>;
