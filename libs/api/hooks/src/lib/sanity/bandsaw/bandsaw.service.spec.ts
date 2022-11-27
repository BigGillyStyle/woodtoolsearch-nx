import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiEventsService } from '@woodtoolsearch/api-events';
import { BandsawService } from './bandsaw.service';

describe('BandsawService', () => {
  let service: BandsawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandsawService, ApiEventsService, EventEmitter2],
    }).compile();

    service = module.get<BandsawService>(BandsawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
