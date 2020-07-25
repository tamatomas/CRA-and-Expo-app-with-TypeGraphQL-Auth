import { Resolver, Mutation, Arg } from "type-graphql";
import { redis } from "../../redis";
import { confirmUserPrefix } from "../../constants";
import { User } from "../../entity/User";

@Resolver()
export class ConfirmUserResolver {
    @Mutation(() => Boolean)
    async confirmUser(@Arg("token") token: string): Promise<boolean> {
        const userId = await redis.get(confirmUserPrefix + token)

        if (!userId) {
            return false;
        }

        await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
        await redis.del(token);

        return true;
    }
}