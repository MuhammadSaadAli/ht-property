import { Inject, Injectable } from '@nestjs/common';
import { HT_PROPERTY_ACTIVITY_LOG } from 'src/database/constants/constants';
import {
  HtPropertyActivityLog,
  IhtPropertyActivityLog,
} from 'src/database/model/ht-property-activity-log.model';

@Injectable()
export class HtPropertyActivityLogService {
  constructor(
    @Inject(HT_PROPERTY_ACTIVITY_LOG)
    private userRepository: typeof HtPropertyActivityLog,
  ) {}
  async createProperty(activityLog: IhtPropertyActivityLog) {
    console.log(activityLog);
    await this.userRepository.create(activityLog);
  }

  async getById(id: string) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  async find(filters: IhtPropertyActivityLog) {
    // console.log('filter', filters)
    let where: any = filters;

    return await this.userRepository.findAll({ where });
  }
}
