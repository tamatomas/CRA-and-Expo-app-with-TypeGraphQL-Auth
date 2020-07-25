import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { MyContext } from "../../types/MyContext";
import bcrypt from "bcryptjs";

@Resolver()
export class LoginResolver {
    @Mutation(() => User)
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx: MyContext
    ): Promise<User> {
        const user = await User.findOne({ where: { email } });

        if (!user) throw new Error("user not found");

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) throw new Error("invalid password");

        if (!user.confirmed) throw new Error("user not confirmed");

        ctx.req.session!.userId = user.id;

        return user;
    }
}
