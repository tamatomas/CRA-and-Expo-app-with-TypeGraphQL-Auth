import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountStack from './navigation/AccountStack';
import Authentication from './navigation/Authentication';
import { useQuery } from '@apollo/client';
import { USER, User } from '../utils';

const Stack = createStackNavigator();

const Navigation = () => {
    const { data } = useQuery(USER);
    const user: User = data.user;
    return (
        <NavigationContainer>            
            <Stack.Navigator initialRouteName="auth">
                {!user.isAuth ?
                    <Stack.Screen name="auth" options={{ headerShown: false }} component={Authentication} />
                    :
                    <Stack.Screen name="user" options={{ headerShown: false }} component={AccountStack} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
