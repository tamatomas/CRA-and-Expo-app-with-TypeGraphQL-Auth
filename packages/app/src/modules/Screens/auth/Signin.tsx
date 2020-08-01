import React from 'react'
import { Layout, Icon, Text, Input, Button } from "@ui-kitten/components"
import { StyleSheet } from 'react-native'
import { AuthNavProps } from 'modules/navigation/AuthParamList'
import { LoginWrapper } from "@init/controller"
import { userVar } from '../../../utils'
import { LoadingIndicator } from '../common/LoadingIndicator'

interface Props extends AuthNavProps<'Signin'> {

}

const Signin = (props: Props) => {
    const setIsAuth = (result: boolean) => {
        alert("authenticated")
        userVar({ isAuth: result });
    }
    return (
        <>
            <Layout style={styles.layout} level="1">
                <Icon name="person-outline" style={styles.icon} fill="#000000" />
                <Text category="h6">
                    Sign in
                </Text>
                <LoginWrapper callback={(result: boolean) => setIsAuth(result)}>
                    {({ errors, loading, handleChange, handleBlur, handleSubmit, values, mutationError }) => (
                        <>
                            <Input
                                placeholder="Email"
                                label="Email:"
                                size="large"
                                onBlur={handleBlur("email")}
                                onChangeText={handleChange("email")}
                                value={values.email}
                                status={errors.email ? "danger" : ""}
                            />
                            <Text category="p2" status="danger">{errors.email}</Text>
                            <Input
                                placeholder="Password"
                                label="Password:"
                                secureTextEntry
                                size="large"
                                onBlur={handleBlur("password")}
                                onChangeText={handleChange("password")}
                                value={values.password}
                                status={errors.password ? "danger" : ""}
                            />
                            <Text category="p2" status="danger">{errors.password}</Text>
                            <Text category="s2" appearance="hint" status="danger">{mutationError?.message}</Text>
                            <Button style={styles.submit} onPress={handleSubmit} accessoryRight={loading ? LoadingIndicator : undefined}>SIGN IN</Button>
                        </>
                    )}
                </LoginWrapper>
            </Layout>
            <Layout level="1" style={styles.buttongroup}>
                <Button appearance="ghost" size="small" onPress={() => props.navigation.navigate('ForgotPassword')} >Forgot Password?</Button>
                <Button appearance="ghost" size="small" onPress={() => props.navigation.navigate('Signup')} >Don´t have an account? Sign Up</Button>
            </Layout>
        </>
    )
}

export default Signin

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
        marginTop: 12,
    },
});