import { Module } from '@nestjs/common';
import { SanityModule } from './sanity/sanity.module';

@Module({
  imports: [SanityModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiHooksModule {}
