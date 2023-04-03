import { Injectable } from '@nestjs/common';
import { CreateMyResourceInput } from './dto/create-my-resource.input';
import { UpdateMyResourceInput } from './dto/update-my-resource.input';

@Injectable()
export class MyResourceService {
  create(createMyResourceInput: CreateMyResourceInput) {
    return 'This action adds a new myResource';
  }

  findAll() {
    return `This action returns all myResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myResource`;
  }

  update(id: number, updateMyResourceInput: UpdateMyResourceInput) {
    return `This action updates a #${id} myResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} myResource`;
  }
}
