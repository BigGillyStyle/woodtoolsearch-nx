import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateBandsawDto } from '@woodtoolsearch/api-tools';
import { Event } from './event';

@Injectable()
export class ApiEventsService {
  constructor(private eventEmitter: EventEmitter2) {}
  public bandsawCreated(createBandsawDto: CreateBandsawDto) {
    this.eventEmitter.emit(Event.BandsawCreated, createBandsawDto);
  }
}
