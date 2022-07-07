import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

export interface SchoolMicroservice {
  getAllSchools(
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Observable<{ schools: ISchool[] }>;

  getSchool(
    param: { id: string },
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Observable<ISchool>;

  softDeleteSchool(
    param: { id: string },
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Observable<any>;
}

export interface ISchool {
  id?: string;
  stateId: string;
  cityId: string;
  countyId: string;
  name: string;
  address: string;
  address2: string;
  address3: string;
  zipCode: number;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  city?: ICity;
  county?: ICounty;
  state?: IState;
}

export interface ICity {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ICounty {
  id?: string;
  name: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IState {
  id?: string;
  name: string;
  stateCode: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
