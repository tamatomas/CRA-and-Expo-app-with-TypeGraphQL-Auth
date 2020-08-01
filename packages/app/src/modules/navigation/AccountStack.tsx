import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../Screens/account/Account';

const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="account" options={{ title: "User" }} component={Account} />
            </Stack.Navigator>
        </>
    )
}

export default AccountStack
