import { Module } from '@nestjs/common';
import { BandsawIndexingService } from './indexing/bandsaw-indexing.service';
import { IndexingService } from './indexing/indexing.service';

@Module({
  controllers: [],
  providers: [IndexingService, BandsawIndexingService],
  exports: [],
})
export class ApiAlgoliaModule {}
