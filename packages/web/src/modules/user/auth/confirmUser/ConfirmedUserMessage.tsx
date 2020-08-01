import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ConfirmedUserMessage = () => {
    return (
        <React.Fragment>
            <Typography>Your account is now confirmed. Now you can access your account </Typography>
            <Link to="/signin">Login</Link>
        </React.Fragment>
    )
}

export default ConfirmedUserMessage
