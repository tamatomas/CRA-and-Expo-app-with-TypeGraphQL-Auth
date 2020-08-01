import React, { useEffect } from 'react'
import { Formik } from "formik"
import { registerPasswordValidation } from "@init/common"
import { useMutation } from '@apollo/client'
import { CHANGEPASS } from '../../graphql/auth'

interface Props {
    children(props: any): JSX.Element;
    token: string;
    mutationResult: (data: any) => void
}

export const ChangePasswordWrapper = (props: Props) => {
    const [changePassword, data] = useMutation(CHANGEPASS);
    useEffect(() => {
        props.mutationResult(data);
    }, [data])
    return (
        <Formik
            initialValues={{
                // same shape as initial values
                password: ''
            }}
            validationSchema={registerPasswordValidation}
            onSubmit={values => {
                changePassword({ variables: { password: values.password, token: props.token } })
            }}
        >
            {({ errors, touched }) => (
                props.children({ errors: errors, touched: touched })
            )}
        </Formik>
    )
}

