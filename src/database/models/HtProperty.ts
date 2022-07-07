import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { HtPropertyType, HtPropertyTypeAttributes } from './HtPropertyType';
import { HtRentDetail, HtRentDetailAttributes } from './HtRentDetail';
import {
  HtTenantProperty,
  HtTenantPropertyAttributes,
} from './HtTenantProperty';

export interface HtPropertyAttributes {
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
  propertyType?: HtPropertyTypeAttributes | null;
  tenants?: HtTenantPropertyAttributes[] | null;
  rentDetails?: HtRentDetailAttributes[] | null;
}

@Table({ tableName: 'ht_property', timestamps: false })
export class HtProperty
  extends Model<HtPropertyAttributes, HtPropertyAttributes>
  implements HtPropertyAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({ type: DataType.CHAR(36) })
  schoolId!: string;

  @Column({ type: DataType.CHAR(36) })
  userId!: string;

  @Column({ type: DataType.CHAR(36) })
  propertyTypeId!: string;

  @Column({ allowNull: true, type: DataType.CHAR(36) })
  ownerId?: string;

  @Column({ allowNull: true, type: DataType.STRING(50) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  apartment?: string;

  @Column({ allowNull: true, type: DataType.STRING(70) })
  address?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  streetAddress?: string;

  @Column({ allowNull: true, type: DataType.STRING(16) })
  phone?: string;

  @Column({ allowNull: true, type: DataType.DOUBLE(10, 2) })
  rent?: number;

  @Column({ allowNull: true, type: DataType.CHAR(1), defaultValue: '0' })
  isPrimary?: string;

  @Column({ allowNull: true, type: DataType.DATEONLY })
  leaseExpiryDate?: string;

  @Column({ type: DataType.TINYINT, defaultValue: '0' })
  canTenantInitiate?: number;

  @Column({ allowNull: true, type: DataType.ENUM('Active') })
  status?: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  deletedAt?: Date;

  @BelongsTo(() => HtPropertyType, 'propertyTypeId')
  propertyType?: HtPropertyType | null;

  @HasMany(() => HtTenantProperty, 'propertyId')
  tenants?: HtTenantProperty[] | null;

  @HasMany(() => HtRentDetail, 'propertyId')
  rentDetails?: HtRentDetail[] | null;
}
