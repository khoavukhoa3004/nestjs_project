import { Test, TestingModule } from '@nestjs/testing';
import { MyResourceService } from './my-resource.service';

describe('MyResourceService', () => {
  let service: MyResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyResourceService],
    }).compile();

    service = module.get<MyResourceService>(MyResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
