import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Event } from '@woodtoolsearch/api-events';
import { CreateBandsawDto } from '@woodtoolsearch/api-tools';
import { IndexingService } from './indexing.service';

const INDEX_NAME = 'bandsaws';

@Injectable()
export class BandsawIndexingService {
  constructor(private indexingService: IndexingService) {}
  @OnEvent(Event.BandsawCreated, { async: true })
  handleBandsawCreatedEvent(payload: CreateBandsawDto) {
    console.log('Bandsaw created event received', payload);
    this.indexingService.saveObject(INDEX_NAME, { objectID: payload._id, ...payload });
  }
}
