import { Module } from '@nestjs/common';
import { SanityModule } from './sanity/sanity/sanity.module';

@Module({
  imports: [SanityModule],
})
export class HooksModule {}
