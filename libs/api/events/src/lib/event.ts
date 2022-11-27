import { CreateBandsawDto } from '@woodtoolsearch/api-tools';

export enum Event {
  BandsawCreated = 'BANDSAW_CREATED',
}

export class BandsawCreatedEvent {
  constructor(public readonly bandsaw: CreateBandsawDto) {}
}
