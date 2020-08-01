import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { NavigationParamList } from './NavigationParamList';

export type AccountParamList = {
    Account: undefined;
} & NavigationParamList;

export type AccountNavProps<T extends keyof AccountParamList> = {
    navigation: StackNavigationProp<AccountParamList, T>;
    route: RouteProp<AccountParamList, T>
}