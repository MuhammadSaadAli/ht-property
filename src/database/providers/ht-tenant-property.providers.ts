import { HtTenantProperty } from '../model/ht-tenant-property.model';

export const HtTenantPropertyProviders = [
  {
    provide: 'HT_Tenant_Property',
    useValue: HtTenantProperty,
  },
];
