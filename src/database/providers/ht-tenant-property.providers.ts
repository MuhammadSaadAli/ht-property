import { HtTenantProperty } from '../model/ht-tenant-property.model';

export const HtPropertyTypeProviders = [
  {
    provide: 'HT_Tenant_Property',
    useValue: HtTenantProperty,
  },
];
