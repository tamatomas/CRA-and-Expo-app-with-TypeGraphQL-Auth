import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { RegisterWrapper } from "@init/controller"
import { Form } from 'formik';
import { FormikField } from "./shared/TexFieldFormik"
import SignupMessage from './signup/SignupMessage';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Signup = () => {
    const classes = useStyles();

    const [registerResult, setRegisterResult] = useState({
        registerSuccess: false
    });

    if (registerResult.registerSuccess) {
        return <SignupMessage />
    }

    return (
        <React.Fragment>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <RegisterWrapper callback={() => setRegisterResult({ registerSuccess: true })}>
                {() => (
                    <Form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormikField
                                    autoComplete="firstname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormikField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikField variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            component="button"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
          </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/signin">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </RegisterWrapper>
        </React.Fragment >
    )
}

export default Signup