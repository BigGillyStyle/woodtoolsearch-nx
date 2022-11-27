import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiEventsService } from '@woodtoolsearch/api-events';
import { BandsawController } from './bandsaw.controller';
import { BandsawService } from './bandsaw.service';

describe('BandsawController', () => {
  let controller: BandsawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandsawController],
      providers: [BandsawService, ApiEventsService, EventEmitter2],
    }).compile();

    controller = module.get<BandsawController>(BandsawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
