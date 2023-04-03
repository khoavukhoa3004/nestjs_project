import { Module } from '@nestjs/common';
import { MyResourceService } from './my-resource.service';
import { MyResourceResolver } from './my-resource.resolver';

@Module({
  providers: [MyResourceResolver, MyResourceService],
})
export class MyResourceModule {}
