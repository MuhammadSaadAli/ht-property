import { Inject, Injectable } from '@nestjs/common';
import {
  HtRentDetails,
  IHtRentDetails,
} from 'src/database/model/ht-rent-details.model';

@Injectable()
export class HtRentDetailsService {
  constructor(
    @Inject('HT_Rent_Details') private userRepository: typeof HtRentDetails,
  ) {}
  async create(rentDetails: IHtRentDetails) {
    return await this.userRepository.create(rentDetails);
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
