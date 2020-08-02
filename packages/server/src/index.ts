import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import session from "express-session";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { redis } from "./redis";
import { createSchema } from "./helpers/createSchema";
import Express from 'express'

const main = async () => {
    if (process.env.NODE_ENV === "production") {
        await createConnection({
            type: "postgres",
            url: process.env.DATABASE_URL
        });
    } else {
        await createConnection();
    }


    const schema = await createSchema();

    const apolloServer = new ApolloServer({
        schema,
        context: ({ req, res }: any) => ({
            req,
            res,
        }),
        formatError: (err) => {
            if (err.path![0] === "login") {
                return {
                    message: "Incorrect email or password."
                }
            }

            return err
        }
    });

    const origin = (process.env.NODE_ENV === "production") ? process.env.REACT_URL : "http://localhost:3000"

    const app = Express();
    const RedisStore = connectRedis(session);
    app.use(
        cors({
            credentials: true,
            origin
        })
    );
    app.use(
        session({
            store: new RedisStore({
                client: redis as any
            }),
            name: "qid",
            secret: "aslkdfjoiq12312",
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
            }
        })
    );
    const port = process.env.PORT || 4000;
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(port, () => {
        console.log(`server started on http://localhost:${port}/graphql`);
    });
};

main().catch(err => console.error(err));
