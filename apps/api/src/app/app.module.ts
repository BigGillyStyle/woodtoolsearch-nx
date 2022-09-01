import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { HooksModule } from '../hooks/hooks.module';
import { BandsawModule } from '../hooks/sanity/bandsaw/bandsaw.module';
import { SanityModule } from '../hooks/sanity/sanity.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    HooksModule,
    RouterModule.register([
      {
        path: 'hooks',
        module: HooksModule,
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
