import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { SchoolMicroservice } from '../../utils';
import { schoolClientOptions } from '../../grpc-config';

@Injectable()
export class SchoolService implements OnModuleInit {
  @Client(schoolClientOptions) private readonly schoolClient: ClientGrpc;

  private schoolMicroservice: SchoolMicroservice;

  constructor() {}

  onModuleInit() {
    this.schoolMicroservice =
      this.schoolClient.getService<SchoolMicroservice>('SchoolMicroservice');
  }

  getSchoolById(id: string) {
    return this.schoolMicroservice.getSchool({ id });
  }
}
