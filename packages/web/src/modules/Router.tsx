import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Auth from './auth/Auth'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={["/signup", "/signin"]}>
                    <Auth />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
