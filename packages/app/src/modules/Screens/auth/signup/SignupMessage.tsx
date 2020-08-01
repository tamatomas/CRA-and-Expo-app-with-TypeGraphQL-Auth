import React from 'react'
import { Text } from 'react-native'
import CenterLayout from '../../common/CenterLayout'

interface Props {

}

const SignupMessage = (props: Props) => {
    return (
        <CenterLayout>
            <Text>Your account was succesfully created. Now check your email for the confirmation url.</Text>
        </CenterLayout>
    )
}

export default SignupMessage
