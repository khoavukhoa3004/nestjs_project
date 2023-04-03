import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMyResourceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
