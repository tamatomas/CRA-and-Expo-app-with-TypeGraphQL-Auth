import React from 'react'
import { makeStyles, useMediaQuery } from '@material-ui/core'
import UserInfo from './account/UserInfo';
import Card from './account/shared/Card';
import ProtectedRoute from '../shared/ProtectedRoute';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0
    }
}))

const Account = (props: Props) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width: 600px)');
    return (
        <React.Fragment>
            {matches && <div className={classes.image} />}
            <ProtectedRoute path="/account">
                <Card match={!matches}>
                    {() => (<UserInfo />)}
                </Card>
            </ProtectedRoute>
        </React.Fragment>
    )
}

export default Account
