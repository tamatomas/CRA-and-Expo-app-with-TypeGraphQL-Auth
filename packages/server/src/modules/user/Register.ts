import { Resolver, Query, Mutation, Arg, UseMiddleware } from "type-graphql";
import bcrypt from "bcryptjs";

import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";
import { isAuth } from "../shared/isAuth";
import { logger } from "../shared/logger";
import { sendEmail } from "../../helpers/sendEmail";
import { createConfirmationUrl } from "../../helpers/createConfirmationOnUrl";

@Resolver()
export class RegisterResolver {
  @UseMiddleware(isAuth, logger)
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(@Arg("data")
  {
    email,
    firstName,
    lastName,
    password,    
  }: RegisterInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,      
      password: hashedPassword
    }).save();

    await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }
}
