import { ISchool } from '../grpc-gateway/interfaces';
import { PropertyTypeDto } from './property-type.dto';
import { RentDetailsDto } from './rent-details.dto';
import { TenantPropertyDto } from './tenant-property.dto';

export class PropertyDto {
  id?: string;
  schoolId?: string;
  userId?: string;
  propertyTypeId?: string;
  ownerId?: string;
  name?: string;
  apartment?: string;
  address?: string;
  streetAddress?: string;
  phone?: string;
  rent?: number;
  isPrimary?: string;
  leaseExpiryDate?: string;
  canTenantInitiate?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  propertyType?: PropertyTypeDto | null;
  tenants?: TenantPropertyDto[] | null;
  rentDetails?: RentDetailsDto[] | null;
  school?: ISchool;
}

export class PropertyArrayDto {
  properties: PropertyDto[];
}
