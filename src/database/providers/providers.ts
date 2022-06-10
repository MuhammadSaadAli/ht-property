import { HT_TENANT_PROPERTY } from '../constants/constants';
import { HtTenantProperty } from '../model/ht-tenant-property.model';
import { HT_RENT_DETAILS } from '../constants/constants';
import { HtRentDetails } from '../model/ht-rent-details.model';
import { HT_PROPERTY } from '../constants/constants';
import { HtProperty } from '../model/ht-property.model';
import { HT_PROPERTY_TYPES } from '../constants/constants';
import { HtPropertyType } from '../model/ht-property-type.model';

export const HtPropertyTypeProviders = [
  {
    provide: HT_PROPERTY_TYPES,
    useValue: HtPropertyType,
  },
];

export const HtPropertyProviders = [
  {
    provide: HT_PROPERTY,
    useValue: HtProperty,
  },
];

export const HtRentDetailsProviders = [
  {
    provide: HT_RENT_DETAILS,
    useValue: HtRentDetails,
  },
];

export const HtTenantPropertyProviders = [
  {
    provide: HT_TENANT_PROPERTY,
    useValue: HtTenantProperty,
  },
];
