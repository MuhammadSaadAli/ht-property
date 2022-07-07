import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { PropertyDto, PropertyArrayDto } from '../../dto';

export interface PropertyManagementGrpcService {
  getAllProperties(
    param: PropertyDto,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<PropertyArrayDto>;

  getPropertyById(
    param: { id: string },
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<PropertyDto>;

  AddProperty(
    param: PropertyDto,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): PropertyDto;

  AddProperties(
    param: PropertyArrayDto,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): PropertyArrayDto;
}
