import React, { Fragment } from 'react'
import { makeStyles, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LogoutButton from './shared/LogoutButton';
import { useQuery } from '@apollo/client';
import { USERDATA } from '@init/controller';
import { User, userVar } from 'src/utils/apollo/user';
interface Props {

}

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "96%",
        margin: "10px"
    },
    button: {
        width: "100%"
    }
}));

const UserInfo = (props: Props) => {
    const classes = useStyles();
    const { data } = useQuery(USERDATA);
    const user: User = data?.me || {};
    return (
        <Fragment>
            <Avatar className={classes.avatar}>
                <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Account
            </Typography>
            <Grid container spacing={2} className={classes.form}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        disabled
                        label="First Name"
                        size="small"
                        style={{ width: "100%" }}
                        value={user.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        disabled
                        label="Second Name"
                        size="small"
                        style={{ width: "100%" }}
                        value={user.lastName}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"
                        disabled
                        label="Email"
                        style={{ width: "100%" }}
                        size="small"
                        value={user.email}
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.button}
                        disabled
                    >Edit</Button>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <LogoutButton callback={() => userVar({ isAuth: false })}>
                        {({ logout }) => (
                            <Button
                                variant="contained"
                                color="secondary"
                                size="medium"
                                className={classes.button}
                                onClick={logout}
                            >Logout</Button>)}
                    </LogoutButton>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default UserInfo
