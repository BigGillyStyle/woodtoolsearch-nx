import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { algoliasearch } from 'algoliasearch';

@Injectable()
export class AlgoliaService {
  client;

  constructor(private configService: ConfigService) {
    const algoliaAppId = this.configService.get<string>('ALGOLIA_APP_ID');
    const algoliaApiKey = this.configService.get<string>('ALGOLIA_API_KEY');
    this.client = algoliasearch(algoliaAppId, algoliaApiKey);
  }

  saveObject() {
    return this.client.saveObject({
      indexName: '<YOUR_INDEX_NAME>',
      body: {
        title: 'My Algolia Object',
      },
    });
  }
}
