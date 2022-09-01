import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BandsawService } from './bandsaw.service';
import { BandsawController } from './bandsaw.controller';
import { requireSignedRequest } from '@sanity/webhook';

@Module({
  controllers: [BandsawController],
  providers: [BandsawService],
})
export class BandsawModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(requireSignedRequest({ secret: process.env.SANITY_WEBHOOK_SECRET, parseBody: true }))
      .forRoutes({ path: 'bandsaw', method: RequestMethod.POST });
  }
}
