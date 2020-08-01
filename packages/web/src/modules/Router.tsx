import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Auth from './user/Auth'
import Account from './user/Account'
import { useQuery } from '@apollo/client'
import { USER } from 'src/utils/apollo/queries'
import { User } from 'src/utils/apollo/user'

const Router = () => {
    const { data } = useQuery(USER);
    const user: User = data.user;
    return (
        <BrowserRouter>
            <Switch>
                <Route path={["/signup", "/signin", "/forgot", "/user/change-password", "/user/confirm"]}>
                    {user.isAuth ? <Redirect to="/account" /> :
                        <Auth />
                    }
                </Route>
                <Route path="/">
                    <Account />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
