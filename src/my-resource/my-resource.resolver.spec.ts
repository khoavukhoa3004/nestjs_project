import { Test, TestingModule } from '@nestjs/testing';
import { MyResourceResolver } from './my-resource.resolver';
import { MyResourceService } from './my-resource.service';

describe('MyResourceResolver', () => {
  let resolver: MyResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyResourceResolver, MyResourceService],
    }).compile();

    resolver = module.get<MyResourceResolver>(MyResourceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
