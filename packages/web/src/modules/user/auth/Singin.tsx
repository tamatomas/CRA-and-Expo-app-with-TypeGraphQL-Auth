import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from "formik"
import { LoginWrapper } from "@init/controller"
import { FormikField } from './shared/TexFieldFormik';
import { userVar } from 'src/utils/apollo/user';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Singin = () => {
    const classes = useStyles();

    const setIsAuth = (result: boolean) => {
        userVar({ isAuth: result });
    }
    return (
        <React.Fragment>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <LoginWrapper callback={(result: boolean) => setIsAuth(result)}>
                {({ errors, touched, mutationError }) => (
                    <Form className={classes.form}>
                        <FormikField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <FormikField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Typography color="error">{mutationError?.message}</Typography>
                        <Field name="rememberme" component={CustomSelect} />
                        <Button
                            type="submit"
                            fullWidth
                            component="button"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot" >
                                    {"Forgot password?"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </LoginWrapper>
        </React.Fragment >
    )
}

export default Singin

const CustomSelect = (props: any) => (
    <FormControlLabel
        control={<Checkbox
            {...props}
            onChange={(e) => props.field.onChange(e)}
            checked={props.field.value}
            name="rememberme"
            value="remember"
            color="primary"
        />}
        label="Remember me"
    />
)