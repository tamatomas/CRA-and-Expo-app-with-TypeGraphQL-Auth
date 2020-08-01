import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text, Icon, Layout, Input } from '@ui-kitten/components'
import { AuthNavProps } from 'modules/navigation/AuthParamList'
import { RegisterWrapper } from '@init/controller'
import SignupMessage from './signup/SignupMessage'
import { LoadingIndicator } from '../common/LoadingIndicator'

interface Props extends AuthNavProps<'Signup'> {

}

const Signup = (props: Props) => {
    const [registerResult, setRegisterResult] = useState({
        registerSuccess: false
    });

    if (registerResult.registerSuccess) {
        return <SignupMessage />
    }
    return (
        <>
            <Layout style={styles.layout} level="1">
                <Icon name="person-outline" style={styles.icon} fill="#000000" />
                <Text category="h6">
                    Sign Up
            </Text>
                <RegisterWrapper callback={() => setRegisterResult({ registerSuccess: true })}>
                    {({ errors, loading, handleChange, handleBlur, handleSubmit, values, isValid }) => (
                        <>
                            <Input
                                label="First Name:"
                                size="large"
                                onChangeText={handleChange("firstName")}
                                onBlur={() => handleBlur("firstName")}
                                value={values.firstName}
                                status={errors.firstName ? "danger" : ""}
                            />
                            <Text category="p2" status="danger">{errors.firstName}</Text>
                            <Input
                                label="Last Name:"
                                size="large"
                                onChangeText={handleChange("lastName")}
                                onBlur={() => handleBlur("lastName")}
                                value={values.lastName}
                                status={errors.lastName ? "danger" : ""}
                            />
                            <Text category="p2" status="danger">{errors.lastName}</Text>
                            <Input
                                placeholder="Email"
                                label="Email:"
                                size="large"
                                onChangeText={handleChange("email")}
                                onBlur={() => handleBlur("email")}
                                value={values.email}
                                status={errors.email ? "danger" : ""}
                            />
                            <Text category="p2" status="danger">{errors.email}</Text>
                            <Input
                                placeholder="Password"
                                label="Password:"
                                secureTextEntry
                                size="large"
                                onChangeText={handleChange("password")}
                                onBlur={() => handleBlur("password")}
                                value={values.password}
                                status={errors.password ? "danger" : ""}
                            />
                            <Text category="p2" status="danger">{errors.password}</Text>
                            <Button style={styles.submit} onPress={handleSubmit} disabled={!isValid} accessoryRight={loading ? LoadingIndicator : undefined} >SIGN UP</Button>
                        </>
                    )}
                </RegisterWrapper>
            </Layout>
            <Layout level="1" style={styles.buttongroup}>
                <Button appearance="ghost" size="small" style={{ marginLeft: "auto" }} onPress={() => props.navigation.navigate("Signin")} >Already have an account? Sign In</Button>
            </Layout>
        </>
    )
}

export default Signup

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    icon: {
        width: 42,
        height: 42
    },
    buttongroup: {
        display: "flex",
        flexDirection: "row",
        padding: 24
    },
    submit: {
        width: 260,
        marginTop: 12
    }
});