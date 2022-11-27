import { Injectable } from '@nestjs/common';
import { ApiEventsService } from '@woodtoolsearch/api-events';
import { CreateBandsawDto, UpdateBandsawDto } from '@woodtoolsearch/api-tools';

@Injectable()
export class BandsawService {
  constructor(private eventService: ApiEventsService) {}

  create(createBandsawDto: CreateBandsawDto) {
    this.eventService.bandsawCreated(createBandsawDto);
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
