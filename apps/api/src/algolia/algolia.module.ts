import { Module } from '@nestjs/common';
import { IndexingService } from './indexing/indexing.service';

@Module({
  providers: [IndexingService],
})
export class AlgoliaModule {}
