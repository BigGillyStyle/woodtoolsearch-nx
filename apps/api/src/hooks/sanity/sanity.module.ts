import { Module } from '@nestjs/common';
import { BandsawModule } from './bandsaw/bandsaw.module';

@Module({
  controllers: [],
  providers: [],
  imports: [BandsawModule],
})
export class SanityModule {}
