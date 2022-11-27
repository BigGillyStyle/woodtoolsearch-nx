import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ApiHooksModule, BandsawModule, SanityModule } from '@woodtoolsearch/api-hooks';
// import { HooksModule } from '../hooks/hooks.module';
// import { BandsawModule } from '../hooks/sanity/bandsaw/bandsaw.module';
// import { SanityModule } from '../hooks/sanity/sanity.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    EventEmitterModule.forRoot(),
    ApiHooksModule,
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
