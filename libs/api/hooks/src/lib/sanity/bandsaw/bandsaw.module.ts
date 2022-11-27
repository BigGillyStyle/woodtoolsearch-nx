import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BandsawService } from './bandsaw.service';
import { BandsawController } from './bandsaw.controller';
import { requireSignedRequest } from '@sanity/webhook';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [BandsawController],
  providers: [BandsawService],
})
export class BandsawModule implements NestModule {
  constructor(private configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        requireSignedRequest({ secret: this.configService.get<string>('SANITY_WEBHOOK_SECRET'), parseBody: false })
      )
      .forRoutes({ path: 'bandsaw', method: RequestMethod.POST });
  }
}
