import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../Screens/auth/Signin';
import Signup from '../Screens/auth/Signup';
import ForgotPassword from '../Screens/auth/ForgotPassword';
import ChangePassword from '../Screens/auth/ChangePassword';

const Stack = createStackNavigator();

const Authentication = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Changepassword" component={ChangePassword} />
            </Stack.Navigator>
        </>
    )
}

export default Authentication