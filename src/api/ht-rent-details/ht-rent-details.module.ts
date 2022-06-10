import { Module } from '@nestjs/common';
import { HtRentDetailsProviders } from 'src/database/providers/providers';
import { HtRentDetailsController } from './ht-rent-details.controller';
import { HtRentDetailsService } from './ht-rent-details.service';

@Module({
  controllers: [HtRentDetailsController],
  providers: [HtRentDetailsService, ...HtRentDetailsProviders],
})
export class HtRentDetailsModule {}
