import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { AccountParamList } from './AccountParamList'
import { AuthParamList } from './AuthParamList'

export type NavigationParamList = {
    user: { screen: keyof AccountParamList };
    auth: { screen: keyof AuthParamList };
}

export type NavigationNavProps<T extends keyof NavigationParamList> = {
    navigation: StackNavigationProp<NavigationParamList, T>;
    route: RouteProp<NavigationParamList, T>
}