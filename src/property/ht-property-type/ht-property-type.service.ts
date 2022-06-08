import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  HtPropertyType,
  IHtPropertyType,
} from 'src/database/model/ht-property-type.model';

@Injectable()
export class HtPropertyTypeService {
  constructor(
    @Inject('HT_PROPERTY_TYPES') private userRepository: typeof HtPropertyType,
  ) {}

  async create(propertyType: IHtPropertyType) {
    console.log('propertyType : ', propertyType.type);
    if (propertyType.type === undefined) {
      throw new BadRequestException('Please Enter the type');
    }
    return await this.userRepository.create(propertyType);
  }

  async find(filters: any) {
    let where: any = {};

    if (filters.type) {
      where.type = filters.type;
    }

    return await this.userRepository.findAll({ where });
  }

  async updateType(id: string, propertyType: IHtPropertyType) {
    propertyType.updatedAt = new Date();
    return await this.userRepository.update(propertyType, { where: { id } });
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
