import { Test, TestingModule } from '@nestjs/testing';
import { BandsawService } from './bandsaw.service';

describe('BandsawService', () => {
  let service: BandsawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandsawService],
    }).compile();

    service = module.get<BandsawService>(BandsawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
