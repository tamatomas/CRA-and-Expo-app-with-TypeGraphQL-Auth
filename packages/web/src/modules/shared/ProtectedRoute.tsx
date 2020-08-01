import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { USER } from 'src/utils/apollo/queries'
import { User } from 'src/utils/apollo/user'

interface Props {
    children: JSX.Element;
    path: string;
}

/*
*   Usage is with the children aproach:
*   <ProtectedRoute path="/path">
*       <Children />
*   </ProtectedRoute>
*     
*/

const ProtectedRoute = (props: Props) => {
    const { data } = useQuery(USER);
    const user: User = data.user;
    if (user.isAuth) {
        return (
            <Route path={props.path}>
                {props.children}
            </Route>
        )
    } else {
        return <Redirect to="/signin" />
    }
}

export default ProtectedRoute
