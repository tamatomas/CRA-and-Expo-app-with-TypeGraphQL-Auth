import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const SignupMessage = () => {
    return (
        <React.Fragment>
            <Typography>Confirmation email sent. Please check your inbox and open the link to confirm your account. </Typography>
            <Link to="/signin">Login</Link>
        </React.Fragment>
    )
}

export default SignupMessage
