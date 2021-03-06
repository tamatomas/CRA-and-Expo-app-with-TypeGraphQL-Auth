import React from 'react'
import { Grid, CssBaseline, Paper, makeStyles } from '@material-ui/core'
import { Route } from 'react-router-dom';
import Signup from './auth/Signup';
import Singin from './auth/Singin';
import ForgotPassword from './auth/ForgotPassword';
import ChangePassword from './auth/ChangePassword';
import ConfirmUser from './auth/ConfirmUser';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

const Auth = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/signin">
                        <Singin />
                    </Route>
                    <Route path="/forgot">
                        <ForgotPassword />
                    </Route>
                    <Route path="/user/change-password/:token">
                        <ChangePassword />
                    </Route>
                    <Route path="/user/confirm/:token">
                        <ConfirmUser />
                    </Route>
                </div>
            </Grid>
        </Grid >
    )
}

export default Auth
