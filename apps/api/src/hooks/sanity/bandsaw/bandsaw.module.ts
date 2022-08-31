import { Module } from '@nestjs/common';
import { BandsawService } from './bandsaw.service';
import { BandsawController } from './bandsaw.controller';

@Module({
  controllers: [BandsawController],
  providers: [BandsawService],
})
export class BandsawModule {}
