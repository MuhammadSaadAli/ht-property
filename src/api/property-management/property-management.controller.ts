import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import {
  RentDetailsDto,
  PropertyDto,
  PropertyTypeDto,
  TenantPropertyDto,
} from 'src/utils';
import { XAuthorization } from 'src/utils/constants/constants';
import { SchoolService } from '../shared-services';
import { PropertyManagementService } from './property-management.service';

@Controller('property-management')
export class PropertyManagementController {
  constructor(
    private readonly pmService: PropertyManagementService,
    private readonly schoolService: SchoolService,
  ) {}

  @Get('property')
  async getAllProperties(filters: PropertyDto) {
    try {
      const gotData = await this.pmService.getAllProperties(filters);
      for (const data of gotData) {
        if (data.schoolId) {
          const schoolRes = await this.schoolService.getSchoolById(
            data.schoolId,
          );
          const schoolData = await lastValueFrom(schoolRes);
          data.school = schoolData;
        }
      }

      // const response: PropertyDto = { ...gotData, school: schoolData };

      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: gotData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Get('property/:id')
  async getPropertyById(@Param('id') id: string) {
    try {
      const gotData = await this.pmService.getPropertyById(id);

      const schoolRes = this.schoolService.getSchoolById(gotData.schoolId);
      const schoolData = await lastValueFrom(schoolRes);

      const response: PropertyDto = { ...gotData, school: schoolData };

      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: response,
      };
    } catch (error) {
      return {
        message: error.details ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }
  @Get('property/manager')
  async getAllPropertiesByManager(@Headers(XAuthorization) xId: string) {
    try {
      const id = this.userIdFromBuffer(xId);
      const gotData = await this.pmService.getAllProperties({
        userId: id,
      });
      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: gotData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Get('property/owner')
  async getAllPropertiesByOwner(@Headers(XAuthorization) xId: string) {
    try {
      const id = this.userIdFromBuffer(xId);
      const gotData = await this.pmService.getAllProperties({
        ownerId: id,
      });
      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: gotData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Post('property')
  async createProperty(@Body() body: PropertyDto) {
    try {
      const response = await this.pmService.createProperty(body);

      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: response,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Post('properties')
  async addBulkProperties(@Body() body: PropertyDto[]) {
    try {
      const response = await this.pmService.addBulkProperties(body);
      return {
        isSuccess: true,
        message: 'Successfully created the Data',
        data: response,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Patch('property/:id')
  async updateProperty(@Param('id') id: string, @Body() property: PropertyDto) {
    try {
      const updatedData = await this.pmService.updateProperty(id, property);
      return {
        isSuccess: true,
        message: 'Successfully updated the Data',
        data: updatedData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Delete('property/:id')
  async deleteProperty(@Param('id') id: string) {
    try {
      const deletedItem = await this.pmService.deleteProperty(id);
      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: deletedItem,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Get('propert-type')
  async getAllPropertTypes() {
    try {
      const gotData = await this.pmService.getPropertyTypes();
      return {
        isSuccess: true,
        message: 'Successfully Got the Data',
        data: gotData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Post('property-type')
  async createPropertyType(@Body() body: PropertyTypeDto) {
    try {
      const createdData = await this.pmService.createPropertyType(body);
      return {
        isSuccess: true,
        message: 'Successfully created the Data',
        data: createdData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Post('tenant-property')
  async createTenantProperty(@Body() body: TenantPropertyDto) {
    try {
      const createdData = await this.pmService.createTenantProperty(body);
      return {
        isSuccess: true,
        message: 'Successfully created the Data',
        data: createdData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Patch('tenant-property/:id')
  async updateTenantProperty(@Param('id') id: string, @Body() property: any) {
    try {
      const updatedData = await this.pmService.updateTenantProperty(
        id,
        property,
      );
      return {
        isSuccess: true,
        message: 'Successfully updated the Data',
        data: updatedData,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Post('rent-details')
  async createRentDetail(@Body() body: RentDetailsDto) {
    try {
      const created = await this.pmService.createRentDetail(body);
      return {
        isSuccess: true,
        message: 'Successfully created the Data',
        data: created,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  userIdFromBuffer(userId: string) {
    return Buffer.from(userId, 'base64').toString();
  }
}
