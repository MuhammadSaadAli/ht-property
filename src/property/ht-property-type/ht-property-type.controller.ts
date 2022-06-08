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
import { IHtPropertyType } from 'src/database/model/ht-property-type.model';
import { HtPropertyTypeService } from './ht-property-type.service';

@Controller('ht-property-type')
export class HtPropertyTypeController {
  constructor(private propertyTypeService: HtPropertyTypeService) {}

  @Post()
  async create(@Body() propertyType: IHtPropertyType) {
    return this.propertyTypeService.create(propertyType);
  }

  @Get()
  async findAll(@Query() filters: any = {}) {
    console.log(filters);
    return this.propertyTypeService.findAll(filters);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() propertyType: IHtPropertyType) {
    return await this.propertyTypeService.updateType(id, propertyType);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.propertyTypeService.delete(id);
  }
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.propertyTypeService.getById(id);
  }
}
