import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { schoolClientOptions, SCHOOL_PACKAGE } from '../../grpc-config';
import { SchoolService } from './school.service';

const services = [SchoolService];

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SCHOOL_PACKAGE,
        ...schoolClientOptions,
      },
    ]),
  ],
  providers: services,
  exports: services,
})
export class SharedServiceModule {}
