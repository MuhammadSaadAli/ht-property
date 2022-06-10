import { Inject, Injectable } from '@nestjs/common';
import { HT_RENT_DETAILS } from 'src/database/constants/constants';
import {
  HtRentDetails,
  IHtRentDetails,
} from 'src/database/model/ht-rent-details.model';

@Injectable()
export class HtRentDetailsService {
  constructor(
    @Inject(HT_RENT_DETAILS) private userRepository: typeof HtRentDetails,
  ) {}
  async create(rentDetails: IHtRentDetails) {
    console.log(rentDetails);
    return await this.userRepository.create(rentDetails);
  }

  async find(filters: IHtRentDetails) {
    // console.log('filter', filters)
    let where: any = filters;

    return await this.userRepository.findAll({ where });
  }

  async updateType(id: string, rentDetails: IHtRentDetails) {
    rentDetails.updatedAt = new Date();
    return await this.userRepository.update(rentDetails, { where: { id } });
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
