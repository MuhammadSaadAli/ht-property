import {
  HT_PROPERTY,
  HT_PROPERTY_TYPES,
  HT_RENT_DETAILS,
  HT_TENANT_PROPERTY,
} from '../constants/constants';
import {
  HtProperty,
  HtPropertyType,
  HtRentDetail,
  HtTenantProperty,
} from '../models';

export const providers = [
  {
    provide: HT_PROPERTY,
    useValue: HtProperty,
  },
  {
    provide: HT_PROPERTY_TYPES,
    useValue: HtPropertyType,
  },
  {
    provide: HT_RENT_DETAILS,
    useValue: HtRentDetail,
  },
  {
    provide: HT_TENANT_PROPERTY,
    useValue: HtTenantProperty,
  },
];
