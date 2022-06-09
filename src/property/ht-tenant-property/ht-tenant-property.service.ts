import { Inject, Injectable } from '@nestjs/common';
import {
  HtTenantProperty,
  IHtTenantProperty,
} from 'src/database/model/ht-tenant-property.model';

@Injectable()
export class HtTenantPropertyService {
  constructor(
    @Inject('HT_Tenant_Property')
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
