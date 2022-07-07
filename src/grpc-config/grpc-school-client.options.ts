import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// this option is exact as microservice options
export const schoolClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'school',
    protoPath: join(
      __dirname,
      '../../src/utils/grpc-gateway/proto/school.proto',
    ),
    url: `localhost:5010`,
  },
};

export const SCHOOL_PACKAGE = 'SCHOOL_PACKAGE';
