import React from 'react';
import { Formik } from "formik";
import { validLoginSchema } from "@init/common";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/auth';
export var LoginWrapper = function (props) {
    var _a, _b;
    var _c = useMutation(LOGIN), login = _c[0], data = _c[1];
    if ((_a = data.data) === null || _a === void 0 ? void 0 : _a.login.id) {
        props.callback(true);
    }
    else if (data.data === null || ((_b = data.data) === null || _b === void 0 ? void 0 : _b.login) === null) {
        props.callback(false);
    }
    return (React.createElement(Formik, { initialValues: {
            email: '',
            password: '',
            rememberme: false
        }, validationSchema: validLoginSchema, onSubmit: function (values) {
            // same shape as initial values
            login({ variables: { email: values.email, password: values.password } })
                .catch(function (err) { return ""; });
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values, isValid = _a.isValid;
        return (props.children({
            errors: errors,
            touched: touched,
            mutationError: data.error,
            loading: data.loading,
            handleChange: handleChange,
            handleBlur: handleBlur,
            handleSubmit: handleSubmit,
            values: values,
            isValid: isValid
        }));
    }));
};
//# sourceMappingURL=LoginWrapper.js.map