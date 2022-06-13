import { Module } from '@nestjs/common';
import { HtPropertyActivityLogProvider } from 'src/database/providers/providers';
import { HtPropertyActivityLogController } from './ht-property-activity-log.controller';
import { HtPropertyActivityLogService } from './ht-property-activity-log.service';

@Module({
  controllers: [HtPropertyActivityLogController],
  providers: [HtPropertyActivityLogService, ...HtPropertyActivityLogProvider],
})
export class HtPropertyActivityLogModule {}
