import React, { useEffect } from 'react';
import { Formik } from "formik";
import { registerPasswordValidation } from "@init/common";
import { useMutation } from '@apollo/client';
import { CHANGEPASS } from '../../graphql/auth';
export var ChangePasswordWrapper = function (props) {
    var _a = useMutation(CHANGEPASS), changePassword = _a[0], data = _a[1];
    useEffect(function () {
        props.mutationResult(data);
    }, [data]);
    return (React.createElement(Formik, { initialValues: {
            // same shape as initial values
            password: ''
        }, validationSchema: registerPasswordValidation, onSubmit: function (values) {
            changePassword({ variables: { password: values.password, token: props.token } });
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched;
        return (props.children({ errors: errors, touched: touched }));
    }));
};
//# sourceMappingURL=ChangePasswordWrapper.js.map