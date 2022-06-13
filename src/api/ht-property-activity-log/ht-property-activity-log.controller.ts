import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IhtPropertyActivityLog } from 'src/database/model/ht-property-activity-log.model';
import { HtPropertyActivityLogService } from './ht-property-activity-log.service';

@Controller('ht-property-activity-log')
export class HtPropertyActivityLogController {
  constructor(private htActivityLog: HtPropertyActivityLogService) {}
  @Post()
  async createProperty(@Body() propertyType: IhtPropertyActivityLog) {
    console.log(propertyType);
    return await this.htActivityLog.createProperty(propertyType);
  }
  @Get()
  async findAll(@Query() filters: any = {}) {
    console.log(filters);
    return this.htActivityLog.find(filters);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.htActivityLog.getById(id);
  }
}
