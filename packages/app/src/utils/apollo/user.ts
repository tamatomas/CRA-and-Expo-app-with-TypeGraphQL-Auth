import { makeVar } from "@apollo/client";

export interface User {
    isAuth: boolean,
    firstName?: string,
    lastName?: string,
    name?: string,
    email?: string
}

const authInitialState: User = {
    isAuth: false
}

export const userVar = makeVar<User>(
    authInitialState
);