import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { BandsawIndexingService } from './bandsaw-indexing.service';
import { IndexingService } from './indexing.service';

describe('BandsawIndexingService', () => {
  let service: BandsawIndexingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandsawIndexingService, IndexingService, ConfigService],
    }).compile();

    service = module.get<BandsawIndexingService>(BandsawIndexingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
