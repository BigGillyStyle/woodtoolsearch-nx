import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ApiAlgoliaModule } from '@woodtoolsearch/api-algolia';
import { ApiHooksModule, BandsawModule, SanityModule } from '@woodtoolsearch/api-hooks';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    EventEmitterModule.forRoot(),
    ApiHooksModule,
    ApiAlgoliaModule,
    RouterModule.register([
      {
        path: 'hooks',
        module: ApiHooksModule,
        children: [
          {
            path: 'sanity',
            module: SanityModule,
            children: [
              {
                path: 'bandsaw',
                module: BandsawModule,
              },
            ],
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
