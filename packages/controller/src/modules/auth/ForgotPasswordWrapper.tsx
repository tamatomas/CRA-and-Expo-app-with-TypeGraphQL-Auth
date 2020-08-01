import React from 'react'
import { Formik } from "formik"
import { registerEmailValidation } from "@init/common"
import { useMutation } from '@apollo/client'
import { FORGOTPASS } from '../../graphql/auth'


interface Props {
    children(props: any): JSX.Element;
    callback?: (args: any) => void;
}

export const ForgotPasswordWrapper = (props: Props) => {
    const [forgotPassword, data] = useMutation(FORGOTPASS);
    if (data.data.forgotPassword && props.callback) {
        props.callback(true);
    }
    return (
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={registerEmailValidation}
            onSubmit={values => {
                // same shape as initial values
                forgotPassword({ variables: { email: values.email } })
            }}
        >
            {({ errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isValid }) => (
                    props.children({
                        errors: errors,
                        touched: touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        isValid,
                        loading: data.loading,
                        result: data.data
                    })
                )}
        </Formik>
    )
}