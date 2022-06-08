import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface IHtTenantProperty {
  id: string;
  tenantId: string;
  propertyId: string;
  moveIn: Date;
  moveOut: Date;
  status: 'Active' | 'Disengaged';
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Table({
  tableName: 'ht_tenant_property',
  timestamps: false,
  underscored: false,
})
export class HtTenantProperty extends Model<IHtTenantProperty> {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @Column({ allowNull: true, type: DataType.STRING })
  tenantId: string;

  @Column({ allowNull: true, type: DataType.STRING })
  propertyId: string;

  @Column({ allowNull: true, type: DataType.DATE, defaultValue: null })
  moveIn: Date;

  @Column({ allowNull: true, type: DataType.DATE, defaultValue: null })
  moveOut: Date;

  @Column({
    field: 'createdAt',
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    field: 'updatedAt',
    type: DataType.DATE,
    defaultValue: null,
  })
  updatedAt: Date;

  @Column({
    field: 'deletedAt',
    type: DataType.DATE,
    defaultValue: null,
  })
  deletedAt: Date;
}
