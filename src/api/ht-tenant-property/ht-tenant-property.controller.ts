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
import { IHtTenantProperty } from 'src/database/model/ht-tenant-property.model';
import { HtTenantPropertyService } from './ht-tenant-property.service';

@Controller('ht-tenant-property')
export class HtTenantPropertyController {
  constructor(private htTenantService: HtTenantPropertyService) {}

  @Post()
  async create(@Body() rentalDetails: IHtTenantProperty) {
    console.log(rentalDetails);
    return this.htTenantService.create(rentalDetails);
  }

  @Get()
  async findAll(@Query() filters: any = {}) {
    console.log(filters);
    return this.htTenantService.find(filters);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() rentalDetails: IHtTenantProperty,
  ) {
    return await this.htTenantService.updateType(id, rentalDetails);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.htTenantService.delete(id);
  }
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.htTenantService.getById(id);
  }
}
