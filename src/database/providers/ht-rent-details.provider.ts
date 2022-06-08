import { HtRentDetails } from '../model/ht-rent-details.model';

export const HtRentDetailsProviders = [
  {
    provide: 'HT_Rent_Details',
    useValue: HtRentDetails,
  },
];
