import * as React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ForgotPasswordWrapper } from "@init/controller"
import { Form } from 'formik';
import { FormikField } from "./shared/TexFieldFormik"

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

const ForgotPassword = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Forgot password?
        </Typography>
            <ForgotPasswordWrapper>
                {() => (
                    <Form className={classes.form}>
                        <Grid container spacing={2}>
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
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            component="button"
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Submit
                        </Button>
                    </Form>
                )}
            </ForgotPasswordWrapper>
        </React.Fragment >
    )
}

export default ForgotPassword