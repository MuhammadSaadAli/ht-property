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
import { IHtProperty } from 'src/database/model/ht-property.model';
import { HtPropertyService } from './ht-property.service';

@Controller('ht-property')
export class HtPropertyController {
  constructor(private htPropertyService: HtPropertyService) {}
  @Post()
  async createProperty(@Body() propertyType: IHtProperty) {
    console.log(propertyType);
    return await this.htPropertyService.createProperty(propertyType);
  }
  @Get()
  async findAll(@Query() filters: any = {}) {
    console.log(filters);
    return this.htPropertyService.find(filters);
  }
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() propertyType: IHtProperty) {
    return await this.htPropertyService.updateType(id, propertyType);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.htPropertyService.delete(id);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.htPropertyService.getById(id);
  }
}
