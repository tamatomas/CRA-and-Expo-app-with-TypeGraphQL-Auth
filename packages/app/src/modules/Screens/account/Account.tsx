import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Layout, Icon, Input, Button } from '@ui-kitten/components'
import { AccountNavProps } from 'modules/navigation/AccountParamList'
import { useQuery } from '@apollo/client'
import { USERDATA } from '@init/controller'
import { User, userVar } from '../../../utils'
import LogoutButton from './LogoutButton'

interface Props extends AccountNavProps<"Account"> {

}

const Account = (props: Props) => {
    const { data } = useQuery(USERDATA);
    console.log(data);

    const user: User = data?.me || {};
    return (
        <Layout style={styles.layout}>
            <Icon name="person-outline" style={styles.icon} fill="#000000" />
            <Text category="h5">Account</Text>
            <Input
                label="First Name:"
                size="large"
                disabled
                value={user.firstName}
            />
            <Input
                label="Last Name:"
                size="large"
                disabled
                value={user.lastName}
            />
            <Input
                placeholder="Email"
                label="Email:"
                size="large"
                disabled
                value={user.email}
            />
            <Button style={styles.submit} disabled >EDIT DATA</Button>
            <Button style={styles.submit} onPress={() => props.navigation.push("user", { screen: "Account" })}>RELOAD</Button>
            <LogoutButton callback={() => userVar({ isAuth: false })}>
                {({ logout, logoutState }) => {
                    console.log(logoutState)
                    return <Button style={styles.submit} onPress={() => logout()} >LOGOUT </Button>
                }}
            </LogoutButton>
        </Layout>
    )
}

export default Account

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    buttongroup: {
        display: "flex",
        flexDirection: "row",
        padding: 24
    },
    icon: {
        width: 42,
        height: 42
    },
    submit: {
        width: 260,
        marginTop: 12
    }
});