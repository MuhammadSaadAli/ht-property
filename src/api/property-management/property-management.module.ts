import { Module } from '@nestjs/common';
import { providers } from 'src/database/providers/providers';
import { SharedServiceModule } from '../shared-services';
import { PropertyManagementController } from './property-management.controller';
import { PropertyManagementGrpcController } from './property-management.grpc.controller';
import { PropertyManagementService } from './property-management.service';

@Module({
  imports: [SharedServiceModule],
  controllers: [PropertyManagementController, PropertyManagementGrpcController],
  providers: [PropertyManagementService, ...providers],
})
export class PropertyManagementModuel {}
