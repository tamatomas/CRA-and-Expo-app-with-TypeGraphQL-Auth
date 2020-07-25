import faker from "faker";
import { Connection } from "typeorm";
import { User } from "../../../entity/User";
import { gCall } from "../../../test-utils/gCall";
import { testConn } from "../../../test-utils/testConn";
import bcrypt from "bcryptjs";

let conn: Connection;

beforeAll(async () => {
    conn = await testConn();
});
afterAll(async () => {
    await conn.close();
});

const loginMutation = `
mutation Login($email: String!, $password: String!){
    login(
      email: $email
      password: $password
    ){
      id
      lastName
      firstName
      email        
    }
  }
`;
describe("Login", () => {
    it("enter account", async () => {
        let password = faker.internet.password();
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            confirmed: true
        }).save();

        const response = await gCall({
            source: loginMutation,
            variableValues: {
                email: user.email,
                password: password
            },
        });

        if (response.errors) {
            console.log(response.errors[0].originalError);
        }

        expect(response).toMatchObject({
            data: {
                login: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    id: `${user.id}`
                }
            }
        })
    }, 100000);
    it("Invalid password", async () => {
        let password = faker.internet.password();
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            confirmed: true
        }).save();

        const response = await gCall({
            source: loginMutation,
            variableValues: {
                email: user.email,
                password: "sadasdas"
            },
        });

        expect(response).toMatchObject({
            errors:
                [{
                    message: 'invalid password',
                }],
            data: null
        })
    })
    it("User not confirmed", async () => {
        let password = faker.internet.password();
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
        }).save();

        const response = await gCall({
            source: loginMutation,
            variableValues: {
                email: user.email,
                password: password
            },
        });

        expect(response).toMatchObject({
            errors:
                [{
                    message: 'user not confirmed',
                }],
            data: null
        })
    })
    it("User not confirmed", async () => {
        const response = await gCall({
            source: loginMutation,
            variableValues: {
                email: "sdasdasda@rand.com",
                password: "sadasdasd"
            },
        });

        expect(response).toMatchObject({
            errors:
                [{
                    message: 'user not found',
                }],
            data: null
        })
    })

});