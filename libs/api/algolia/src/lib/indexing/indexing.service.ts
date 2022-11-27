import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';
import { AlgoliaIndexableObject } from './types';

@Injectable()
export class IndexingService {
  client: SearchClient;
  indices: Record<string, SearchIndex> = {};

  constructor(private configService: ConfigService) {
    const algoliaAppId = this.configService.get<string>('ALGOLIA_APP_ID');
    const algoliaApiKey = this.configService.get<string>('ALGOLIA_API_KEY');
    this.client = algoliasearch(algoliaAppId, algoliaApiKey);
  }

  private getIndex(indexName: string) {
    if (!this.indices[indexName]) {
      this.indices[indexName] = this.client.initIndex(indexName);
    }
    return this.indices[indexName];
  }

  saveObject<T extends AlgoliaIndexableObject>(indexName: string, obj: T) {
    const index = this.getIndex(indexName);
    return index.saveObject(obj).wait();
  }
}
