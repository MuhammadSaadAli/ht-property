import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  HT_PROPERTY,
  HT_PROPERTY_TYPES,
  HT_RENT_DETAILS,
  HT_TENANT_PROPERTY,
} from 'src/database/constants/constants';
import {
  HtProperty,
  HtPropertyType,
  HtRentDetail,
  HtTenantProperty,
} from 'src/database/models';
import {
  RentDetailsDto,
  PropertyDto,
  PropertyTypeDto,
  TenantPropertyDto,
} from 'src/utils';

@Injectable()
export class PropertyManagementService {
  constructor(
    @Inject(HT_PROPERTY) private propertyRepo: typeof HtProperty,
    @Inject(HT_PROPERTY_TYPES) private propertTypeRepo: typeof HtPropertyType,
    @Inject(HT_RENT_DETAILS) private rentDetailRepo: typeof HtRentDetail,
    @Inject(HT_TENANT_PROPERTY)
    private tenantPropertyRepo: typeof HtTenantProperty,
  ) {}

  async getAllProperties(filters = <PropertyDto>{}): Promise<PropertyDto[]> {
    const gotData = await this.propertyRepo.findAll({
      where: { ...filters },
      include: [HtPropertyType, HtTenantProperty, HtRentDetail],
    });
    return gotData.map((x) => x.toJSON());
  }

  async getPropertyById(id: string): Promise<PropertyDto> {
    const gotData = await this.propertyRepo.findOne({
      where: {
        id,
      },
      include: [HtPropertyType],
    });
    if (!gotData) {
      throw new HttpException(
        { message: ' Data not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return gotData.get();
  }

  async getPropertyByIdWithTenants(id: string): Promise<PropertyDto> {
    const gotData = await this.propertyRepo.findOne({
      where: {
        id,
      },
      include: [HtPropertyType, HtTenantProperty, HtRentDetail],
    });
    if (!gotData) {
      throw new HttpException(
        { message: ' Data not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return gotData;
  }

  async createProperty(param: PropertyDto): Promise<PropertyDto> {
    return await this.propertyRepo.create(param);
  }

  async addBulkProperties(param: PropertyDto[]): Promise<PropertyDto[]> {
    return await this.propertyRepo.bulkCreate(param);
  }

  async updateProperty(id: string, property: PropertyDto) {
    property.updatedAt = new Date();
    return await this.propertyRepo.update(property, { where: { id } });
  }

  async deleteProperty(id: string) {
    return await this.propertyRepo.destroy({
      where: {
        id,
      },
    });
  }

  async createPropertyType(param: PropertyTypeDto): Promise<PropertyTypeDto> {
    return await this.propertTypeRepo.create(param);
  }

  async getPropertyTypes(): Promise<PropertyTypeDto[]> {
    return await this.propertTypeRepo.findAll();
  }

  async createTenantProperty(
    param: TenantPropertyDto,
  ): Promise<TenantPropertyDto> {
    return await this.tenantPropertyRepo.create(param);
  }

  async updateTenantProperty(id: string, property: any): Promise<any> {
    property.updatedAt = new Date();
    return await this.tenantPropertyRepo.update(property, { where: { id } });
  }

  async createRentDetail(param: RentDetailsDto) {
    return await this.rentDetailRepo.create(param);
  }
}
