import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'

interface Props {
    children(props: any): JSX.Element;
    width?: string;
    height?: string;
    match?: boolean;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2)
    }
}))

/*
* props.match -> media query min-width: 600px
*/

const Card = (props: Props) => {
    const classes = useStyles();
    return (
        <Paper
            className={classes.paper}
            elevation={4}
            style={{
                width: (props.width || (props.match ? "100vw" : "36vw")),
                height: (props.width || (props.match ? "100vh" : "auto"))
            }}>
            {
                props.children({ match: props.match })
            }
        </Paper >
    )
}

export default Card
