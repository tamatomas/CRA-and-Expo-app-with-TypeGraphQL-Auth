var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var REGISTER = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmutation Register($data: RegisterInput!) {\n  register(\n    data: $data\n  ) {\n    id\n  }\n}\n"], ["\nmutation Register($data: RegisterInput!) {\n  register(\n    data: $data\n  ) {\n    id\n  }\n}\n"])));
export var LOGIN = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nmutation Login($email: String!, $password: String!){\n    login(\n      email: $email\n      password: $password\n    ){\n      id\n      lastName\n      firstName\n      email        \n    }\n  }\n"], ["\nmutation Login($email: String!, $password: String!){\n    login(\n      email: $email\n      password: $password\n    ){\n      id\n      lastName\n      firstName\n      email        \n    }\n  }\n"])));
export var CONFIRM = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nmutation confirmUser($token: String!){\n  confirmUser(\n    token: $token\n  )\n}"], ["\nmutation confirmUser($token: String!){\n  confirmUser(\n    token: $token\n  )\n}"])));
export var LOGOUT = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nmutation logout{\n  logout\n}"], ["\nmutation logout{\n  logout\n}"])));
export var FORGOTPASS = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nmutation forgotPassword($email: String!){\n  forgotPassword(email: $email)\n}\n"], ["\nmutation forgotPassword($email: String!){\n  forgotPassword(email: $email)\n}\n"])));
export var CHANGEPASS = gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\nmutation changePassword($data: ChangePasswordInput!){\n  changePassword(data: $data){\n    email\n  }\n}"], ["\nmutation changePassword($data: ChangePasswordInput!){\n  changePassword(data: $data){\n    email\n  }\n}"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=mutations.js.map