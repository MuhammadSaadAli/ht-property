import { HtPropertyAttributes } from 'src/database/models';
import { PropertyDto } from './property.dto';

export class TenantPropertyDto {
  id?: string;
  tenantId: string;
  propertyId: string;
  moveIn?: string;
  moveOut?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  property?: PropertyDto | null;
}
// export class UpdateTenantPropertyDto {
//   id?: string;
//   tenantId?: string;
//   propertyId?: string;
//   moveIn?: string;
//   moveOut?: string;
//   status?: string;
//   createdAt?: Date;
//   updatedAt?: Date;
//   deletedAt?: Date;
//   property?: PropertyDto | null;
// }
