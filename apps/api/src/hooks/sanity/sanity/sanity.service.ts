import { Injectable } from '@nestjs/common';
import { CreateSanityDto } from './dto/create-sanity.dto';
import { UpdateSanityDto } from './dto/update-sanity.dto';

@Injectable()
export class SanityService {
  create(createSanityDto: CreateSanityDto) {
    return 'This action adds a new sanity';
  }

  findAll() {
    return `This action returns all sanity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sanity`;
  }

  update(id: number, updateSanityDto: UpdateSanityDto) {
    return `This action updates a #${id} sanity`;
  }

  remove(id: number) {
    return `This action removes a #${id} sanity`;
  }
}
