import React from 'react';
import { Formik } from "formik";
import { registerEmailValidation } from "@init/common";
import { useMutation } from '@apollo/client';
import { FORGOTPASS } from '../../graphql/auth';
export var ForgotPasswordWrapper = function (props) {
    var _a = useMutation(FORGOTPASS), forgotPassword = _a[0], data = _a[1];
    if (data.data.forgotPassword && props.callback) {
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