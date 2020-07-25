import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
    return createConnection({
        "type": "postgres",
        "host": "localhost",
        "port": 5433,
        "username": "postgres",
        "password": "root",
        "database": "monorepo-tests",
        "synchronize": drop,
        "dropSchema": drop,
        "entities": [__dirname + "/../entity/*.*"]
    }
    );
};
