import { ClassType, Field, InputType } from "type-graphql";

export const hocClass = <T extends ClassType>(BaseClass: T) => {
  @InputType()
  class OkInput extends BaseClass {
    @Field()
    ok: boolean;
  }
  return OkInput;
};
