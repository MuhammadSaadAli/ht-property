import { Controller } from '@nestjs/common';
import { HtRentDetailsService } from './ht-rent-details.service';

@Controller('ht-rent-details')
export class HtRentDetailsController {
  constructor(private htRentdetails: HtRentDetailsService) {}
}
