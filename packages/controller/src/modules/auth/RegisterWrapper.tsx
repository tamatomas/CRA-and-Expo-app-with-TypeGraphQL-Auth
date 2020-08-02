import React, { useMemo } from 'react'
import { Formik } from "formik"
import { validRegisterSchema } from "@init/common"
import { useMutation } from '@apollo/client'
import { REGISTER } from '../../graphql/auth'


interface Props {
    children(props: any): JSX.Element;
    callback: () => void;
}
export const RegisterWrapper = (props: Props) => {
    let initialValues = useMemo(() => {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        }
    }, []);
    const [register, data] = useMutation(REGISTER);
    if (data.data?.register.id) {
        console.log("calling back!");
        props.callback();
    }
    return (
        <Formik
            validateOnBlur
            initialValues={initialValues}
            validationSchema={validRegisterSchema}
            onSubmit={values => {
                register({
                    variables: {
                        data: values
                    }
                }).then(() => (null))
            }}>
            {({ errors, touched, handleChange, handleBlur, handleSubmit, values, isValid }) => (
                props.children({
                    errors: errors,
                    touched: touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isValid,
                    loading: data.loading
                })
            )}
        </Formik>
    )
}

