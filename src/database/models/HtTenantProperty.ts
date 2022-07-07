import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { HtProperty, HtPropertyAttributes } from './HtProperty';

export interface HtTenantPropertyAttributes {
  id?: string;
  tenantId: string;
  propertyId: string;
  moveIn?: string;
  moveOut?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  property?: HtPropertyAttributes | null;
}

@Table({ tableName: 'ht_tenant_property', timestamps: false })
export class HtTenantProperty
  extends Model<HtTenantPropertyAttributes, HtTenantPropertyAttributes>
  implements HtTenantPropertyAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({ type: DataType.CHAR(36) })
  tenantId!: string;

  @Column({ type: DataType.CHAR(36) })
  propertyId!: string;

  @Column({ allowNull: true, type: DataType.DATEONLY })
  moveIn?: string;

  @Column({ allowNull: true, type: DataType.DATEONLY })
  moveOut?: string;

  @Column({
    type: DataType.ENUM('Active', 'Disengaged'),
    defaultValue: 'Active',
  })
  status?: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  deletedAt?: Date;

  @BelongsTo(() => HtProperty, 'propertyId')
  property?: HtProperty | null;
}
