import { Module } from '@nestjs/common';
import { IndexingService } from './indexing/indexing.service';

@Module({
  controllers: [],
  providers: [IndexingService],
  exports: [],
})
export class ApiAlgoliaModule {}
