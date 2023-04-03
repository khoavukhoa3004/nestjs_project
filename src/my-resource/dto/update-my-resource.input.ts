import { CreateMyResourceInput } from './create-my-resource.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMyResourceInput extends PartialType(CreateMyResourceInput) {
  @Field(() => Int)
  id: number;
}
