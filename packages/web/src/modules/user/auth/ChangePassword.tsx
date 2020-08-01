import * as React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { ChangePasswordWrapper } from "@init/controller"
import { Form } from 'formik';
import { FormikField } from "./shared/TexFieldFormik"
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

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

type TParams = { token: string }

const ChangePassword = ({ match }: RouteComponentProps<TParams>) => {
    const classes = useStyles();
    const [changeResult, setChangeResult] = React.useState<any>(null);
    if (changeResult.data) {
        setTimeout(() => {
            return (
                <Redirect to="signin" />
            )
        }, 2100);
    }
    return (
        <React.Fragment>
            <Backdrop open={changeResult.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={changeResult.data} autoHideDuration={2000}>
                <Alert severity="success">
                    Password changed successfully.
                </Alert>
            </Snackbar>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Change password
        </Typography>
            <ChangePasswordWrapper token={match.params.token} mutationResult={setChangeResult}>
                {({ submitData }) => (
                    <Form className={classes.form}>
                        <Grid container spacing={2}>
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
                            className={classes.submit}>
                            Submit
                        </Button>
                    </Form>
                )}
            </ChangePasswordWrapper>
        </React.Fragment >
    )
}

export default withRouter(ChangePassword)

