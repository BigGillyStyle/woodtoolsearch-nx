import { Injectable } from '@nestjs/common';
import { CreateBandsawDto } from './dto/create-bandsaw.dto';
import { UpdateBandsawDto } from './dto/update-bandsaw.dto';

@Injectable()
export class BandsawService {
  create(createBandsawDto: CreateBandsawDto) {
    return 'This action adds a new bandsaw';
  }

  findAll() {
    return `This action returns all bandsaw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bandsaw`;
  }

  update(id: number, updateBandsawDto: UpdateBandsawDto) {
    return `This action updates a #${id} bandsaw`;
  }

  remove(id: number) {
    return `This action removes a #${id} bandsaw`;
  }
}
