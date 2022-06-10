import { Inject, Injectable } from '@nestjs/common';
import { HT_TENANT_PROPERTY } from 'src/database/constants/constants';
import {
  HtTenantProperty,
  IHtTenantProperty,
} from 'src/database/model/ht-tenant-property.model';

@Injectable()
export class HtTenantPropertyService {
  constructor(
    @Inject(HT_TENANT_PROPERTY)
    private userRepository: typeof HtTenantProperty,
  ) {}
  async create(tenantProperty: IHtTenantProperty) {
    console.log(tenantProperty);
    return await this.userRepository.create(tenantProperty);
  }

  async find(filters: IHtTenantProperty) {
    // console.log('filter', filters)
    let where: any = filters;

    return await this.userRepository.findAll({ where });
  }

  async updateType(id: string, tenantProperty: IHtTenantProperty) {
    tenantProperty.updatedAt = new Date();
    console.log(tenantProperty);
    tenantProperty.moveIn = new Date(tenantProperty.moveIn);
    return await this.userRepository.update(tenantProperty, { where: { id } });
  }

  async delete(id: string) {
    return await this.userRepository.destroy({
      where: {
        id: id,
      },
    });
  }
  async getById(id: string) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
