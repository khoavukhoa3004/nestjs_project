import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MyResourceService } from './my-resource.service';
import { MyResource } from './entities/my-resource.entity';
import { CreateMyResourceInput } from './dto/create-my-resource.input';
import { UpdateMyResourceInput } from './dto/update-my-resource.input';

@Resolver(() => MyResource)
export class MyResourceResolver {
  constructor(private readonly myResourceService: MyResourceService) {}

  @Mutation(() => MyResource)
  createMyResource(@Args('createMyResourceInput') createMyResourceInput: CreateMyResourceInput) {
    return this.myResourceService.create(createMyResourceInput);
  }

  @Query(() => [MyResource], { name: 'myResource' })
  findAll() {
    return this.myResourceService.findAll();
  }

  @Query(() => MyResource, { name: 'myResource' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.myResourceService.findOne(id);
  }

  @Mutation(() => MyResource)
  updateMyResource(@Args('updateMyResourceInput') updateMyResourceInput: UpdateMyResourceInput) {
    return this.myResourceService.update(updateMyResourceInput.id, updateMyResourceInput);
  }

  @Mutation(() => MyResource)
  removeMyResource(@Args('id', { type: () => Int }) id: number) {
    return this.myResourceService.remove(id);
  }
}
