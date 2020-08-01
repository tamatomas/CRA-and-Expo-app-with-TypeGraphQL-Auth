import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { NavigationParamList } from './NavigationParamList'

export type AuthParamList = {
    Signin: undefined;
    Signup: undefined;
    ForgotPassword: undefined;
    ChangePassword: undefined;
} & NavigationParamList;

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
    route: RouteProp<AuthParamList, T>
}