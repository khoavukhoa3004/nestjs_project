import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MyResource {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
