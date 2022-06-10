import { Inject, Injectable } from '@nestjs/common';
import { HT_PROPERTY } from 'src/database/constants/constants';
import { HtProperty, IHtProperty } from 'src/database/model/ht-property.model';

@Injectable()
export class HtPropertyService {
  constructor(@Inject(HT_PROPERTY) private userRepository: typeof HtProperty) {}

  async createProperty(property: IHtProperty) {
    console.log(property);
    await this.userRepository.create(property);
  }
  async updateType(id: string, property: IHtProperty) {
    property.updatedAt = new Date();
    return await this.userRepository.update(property, { where: { id } });
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
  async find(filters: IHtProperty) {
    // console.log('filter', filters)
    let where: any = filters;

    return await this.userRepository.findAll({ where });
  }
}
