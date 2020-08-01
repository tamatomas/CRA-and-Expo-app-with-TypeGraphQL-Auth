import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CONFIRM } from "@init/controller"
import { useMutation } from '@apollo/client';
import ConfirmedUserMessage from './confirmUser/ConfirmedUserMessage';
import { Backdrop, CircularProgress } from '@material-ui/core';

type TParams = { token: string }

const ConfirmUser = ({ match }: RouteComponentProps<TParams>) => {
    const [confirmUser, data] = useMutation(CONFIRM);
    if (!data.called) {
        confirmUser({ variables: { token: match.params.token } })
    }
    if (data.data?.confirmUser) {
        return <ConfirmedUserMessage />
    }
    else return (
        <Backdrop open>
            <CircularProgress />
        </Backdrop>
    );

}

export default withRouter(ConfirmUser)