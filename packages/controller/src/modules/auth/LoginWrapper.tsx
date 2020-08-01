import React from 'react'
import { Formik } from "formik"
import { validLoginSchema } from "@init/common"
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../graphql/auth'


interface Props {
    children(props: any): JSX.Element;
    callback: (result: boolean) => void
}

export const LoginWrapper = (props: Props) => {
    const [login, data] = useMutation(LOGIN);

    if (data.data?.login.id) {
        props.callback(true)
    } else if (data.data === null || data.data?.login === null) {
        props.callback(false)
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberme: false
            }}
            validationSchema={validLoginSchema}
            onSubmit={values => {
                // same shape as initial values
                login({ variables: { email: values.email, password: values.password } })
                    .catch(err => "")
            }}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, values, isValid }) => (
                props.children({
                    errors,
                    touched,
                    mutationError: data.error,
                    loading: data.loading,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isValid
                })
            )}
        </Formik>
    )
}