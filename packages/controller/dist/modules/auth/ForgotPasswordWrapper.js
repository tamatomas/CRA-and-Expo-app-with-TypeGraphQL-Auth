import React from 'react';
import { Formik } from "formik";
import { registerEmailValidation } from "@init/common";
import { useMutation } from '@apollo/client';
import { FORGOTPASS } from '../../graphql/auth';
export var ForgotPasswordWrapper = function (props) {
    var _a;
    var _b = useMutation(FORGOTPASS), forgotPassword = _b[0], data = _b[1];
    if (((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.forgotPassword) && props.callback) {
        props.callback(true);
    }
    return (React.createElement(Formik, { initialValues: {
            email: ''
        }, validationSchema: registerEmailValidation, onSubmit: function (values) {
            // same shape as initial values
            forgotPassword({ variables: { email: values.email } });
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values, isValid = _a.isValid;
        return (props.children({
            errors: errors,
            touched: touched,
            handleChange: handleChange,
            handleBlur: handleBlur,
            handleSubmit: handleSubmit,
            values: values,
            isValid: isValid,
            loading: data.loading,
            result: data.data
        }));
    }));
};
//# sourceMappingURL=ForgotPasswordWrapper.js.map