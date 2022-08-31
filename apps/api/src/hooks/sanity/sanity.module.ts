import { Module } from '@nestjs/common';
import { SanityService } from './sanity.service';
import { SanityController } from './sanity.controller';
import { BandsawModule } from './bandsaw/bandsaw.module';

@Module({
  controllers: [SanityController],
  providers: [SanityService],
  imports: [BandsawModule],
})
export class SanityModule {}
