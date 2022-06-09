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
import {
  HtRentDetails,
  IHtRentDetails,
} from 'src/database/model/ht-rent-details.model';
import { HtRentDetailsService } from './ht-rent-details.service';

@Controller('ht-rent-details')
export class HtRentDetailsController {
  constructor(private htRentdetails: HtRentDetailsService) {}

  @Post()
  async create(@Body() rentalDetails: IHtRentDetails) {
    console.log(rentalDetails);
    return this.htRentdetails.create(rentalDetails);
  }

  @Get()
  async findAll(@Query() filters: any = {}) {
    console.log(filters);
    return this.htRentdetails.find(filters);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() rentalDetails: IHtRentDetails) {
    return await this.htRentdetails.updateType(id, rentalDetails);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.htRentdetails.delete(id);
  }
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.htRentdetails.getById(id);
  }
}
