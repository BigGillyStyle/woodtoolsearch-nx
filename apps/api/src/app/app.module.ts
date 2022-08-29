import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HooksModule } from '../hooks/hooks.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HooksModule,
    RouterModule.register([
      {
        path: 'hooks',
        module: HooksModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
