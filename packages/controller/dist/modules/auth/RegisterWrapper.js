import React, { useMemo } from 'react';
import { Formik } from "formik";
import { validRegisterSchema } from "@init/common";
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../graphql/auth';
export var RegisterWrapper = function (props) {
    var _a;
    var initialValues = useMemo(function () {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        };
    }, []);
    var _b = useMutation(REGISTER), register = _b[0], data = _b[1];
    if ((_a = data.data) === null || _a === void 0 ? void 0 : _a.register.id) {
        console.log("calling back!");
        props.callback();
    }
    return (React.createElement(Formik, { validateOnBlur: true, initialValues: initialValues, validationSchema: validRegisterSchema, onSubmit: function (values) {
            register({
                variables: {
                    data: values
                }
            });
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
            loading: data.loading
        }));
    }));
};
//# sourceMappingURL=RegisterWrapper.js.map