import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test } from '@nestjs/testing';
import { ApiEventsService } from './api-events.service';

describe('ApiEventsService', () => {
  let service: ApiEventsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiEventsService, EventEmitter2],
    }).compile();

    service = module.get(ApiEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
