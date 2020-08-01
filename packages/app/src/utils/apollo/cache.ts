import { InMemoryCache } from "@apollo/client";
import { userVar } from "./user";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                user: {
                    read() {
                        return userVar();
                    }
                }
            }
        }
    }
});

