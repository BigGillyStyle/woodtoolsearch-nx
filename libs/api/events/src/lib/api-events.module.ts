import { Module } from '@nestjs/common';
import { ApiEventsService } from './api-events.service';

@Module({
  controllers: [],
  providers: [ApiEventsService],
  exports: [ApiEventsService],
})
export class ApiEventsModule {}
