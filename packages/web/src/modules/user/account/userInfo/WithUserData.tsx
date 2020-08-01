import { useQuery } from '@apollo/client'
import { USERDATA } from '@init/controller'

interface Props {
    children(props: any): JSX.Element;
}

const WithUserData = (props: Props) => {
    const { data } = useQuery(USERDATA);
    return (
        props.children(data)
    )
}

export default WithUserData
