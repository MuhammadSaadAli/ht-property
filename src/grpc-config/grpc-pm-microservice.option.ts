import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const USER_PACKAGE = 'PM_PACKAGE';

export const grpcPMMicroserviceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'property_management',
    protoPath: join(
      __dirname,
      '../../src/utils/grpc-gateway/proto/property-management.proto',
    ),
    url: 'localhost:5003',
  },
};
