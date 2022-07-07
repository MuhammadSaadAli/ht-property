export class RentDetailsDto {
  id?: string;
  propertyId: string;
  amount?: number;
  ats?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class UpdateRentDetailsDto {
  id?: string;
  propertyId?: string;
  amount?: number;
  ats?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
