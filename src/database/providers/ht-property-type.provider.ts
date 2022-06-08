import { HtPropertyType } from '../model/ht-property-type.model';

export const HtPropertyTypeProviders = [
  {
    provide: 'HT_PROPERTY_TYPES',
    useValue: HtPropertyType,
  },
];
