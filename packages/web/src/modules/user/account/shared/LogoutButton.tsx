import { useMutation } from '@apollo/client'
import { LOGOUT } from '@init/controller'

interface Props {
    children(props: any): JSX.Element;
    callback: () => void
}

const LogoutButton = (props: Props) => {
    const [logout, { data }] = useMutation(LOGOUT);
    if (data?.logout) {
        props.callback();
    }
    return (
        props.children({ logout: logout, logoutState: data })
    )
}

export default LogoutButton
