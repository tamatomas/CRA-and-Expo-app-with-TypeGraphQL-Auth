
import React, { useState } from 'react'
import { Layout, Icon, Text, Input, Button } from "@ui-kitten/components"
import { StyleSheet } from 'react-native'
import { AuthNavProps } from 'modules/navigation/AuthParamList'
import { ForgotPasswordWrapper } from '@init/controller'
import { LoadingIndicator } from '../common/LoadingIndicator'
import SignupMessage from './signup/SignupMessage'

interface Props extends AuthNavProps<'Signin'> {

}

const ForgotPassword = (props: Props) => {
    const [submitResult, setResult] = useState(false);
    if (submitResult) {
        return <SignupMessage />
    }
    return (
        <>
            <Layout level="1" style={styles.buttongroup}>
                <Button appearance="ghost" size="medium" style={{ marginRight: "auto" }} onPress={() => props.navigation.goBack()} >Back</Button>
            </Layout>
            <Layout style={styles.layout} level="1">
                <Icon name="person-outline" style={styles.icon} fill="#000000" />
                <Text category="h6">
                    Forgot your password?
            </Text>
                <ForgotPasswordWrapper callback={() => setResult(true)}>
                    {({ errors, loading, handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <Input
                                placeholder="Email"
                                label="Email:"
                                size="large"
                                onChangeText={handleChange('email')}
                                onBlur={() => handleBlur('email')}
                                value={values.email}
                                status={errors.email ? "danger" : ""}
                            />

                            <Button style={styles.submit} onPress={handleSubmit} accessoryRight={loading ? LoadingIndicator : undefined}>SUBMIT</Button>
                        </>
                    )}
                </ForgotPasswordWrapper>
            </Layout>
        </>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    layout: {
        alignItems: 'center',
        padding: 24,
        flex: 3
    },
    icon: {
        width: 42,
        height: 42
    },
    buttongroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 32,
        flex: 1
    },
    submit: {
        width: 260,
        marginTop: 12
    }
});