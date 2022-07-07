import { Controller } from '@nestjs/common';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';
import { PropertyManagementService } from './property-management.service';
import { PropertyArrayDto, PropertyDto } from '../../utils';

const serviceName = 'PropertyManagementGrpcService';

@Controller('property-management')
export class PropertyManagementGrpcController {
  constructor(private readonly pmService: PropertyManagementService) {}

  @GrpcMethod(serviceName, 'GetAllProperties')
  async getAllProperties(
    param: PropertyDto,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<PropertyArrayDto> {
    const response = await this.pmService.getAllProperties(param);
    return { properties: response };
  }

  @GrpcMethod(serviceName, 'GetPropertyById')
  getPropertyById(
    param: { id: string },
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<PropertyDto> {
    return this.pmService.getPropertyById(param.id);
  }

  @GrpcMethod(serviceName, 'AddProperty')
  addProperty(
    param: PropertyDto,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<PropertyDto> {
    return this.pmService.createProperty(param);
  }

  @GrpcMethod(serviceName, 'AddProperties')
  async addProperties(
    param: PropertyArrayDto,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<PropertyArrayDto> {
    const response = await this.pmService.addBulkProperties(param.properties);
    return { properties: response };
  }
}
