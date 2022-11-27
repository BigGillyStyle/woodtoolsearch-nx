import { Test, TestingModule } from '@nestjs/testing';
import { BandsawController } from './bandsaw.controller';
import { BandsawService } from './bandsaw.service';

describe('BandsawController', () => {
  let controller: BandsawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandsawController],
      providers: [BandsawService],
    }).compile();

    controller = module.get<BandsawController>(BandsawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
