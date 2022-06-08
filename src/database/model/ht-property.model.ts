import {
  Column,
  DataType,
  Model,
  Sequelize,
  Table,
} from 'sequelize-typescript';

export interface IHtProperty {
  id: string;
  schoolId: string;
  userId: string;
  propertyTypeId: string;
  ownerId: string;
  name: string;
  apartment: string;
  address: string;
  streetAddress: string;
  phone: number;
  rent: number;
  isPrimary: string;
  leaseExpiryDate: Date;
  canTenantInitiate: number;
  status: 'Active' | null | '';
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Table({ tableName: 'ht_property', timestamps: false, underscored: false })
export class HtProperty extends Model<IHtProperty> {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  schoolId: string;

  @Column({ allowNull: false, type: DataType.STRING })
  userId: string;

  @Column({ allowNull: false, type: DataType.STRING })
  propertyTypeId: string;

  @Column({ allowNull: false, type: DataType.STRING })
  ownerId: string;

  @Column({ defaultValue: null, type: DataType.STRING })
  name: string;

  @Column({ defaultValue: null, type: DataType.STRING })
  apartment: string;

  @Column({ defaultValue: null, type: DataType.STRING })
  address: string;

  @Column({ defaultValue: null, type: DataType.STRING })
  streetAddress: string;

  @Column({ defaultValue: null, type: DataType.NUMBER })
  phone: number;

  @Column({ defaultValue: null, type: DataType.DOUBLE })
  rent: number;

  @Column({ defaultValue: '0', type: DataType.CHAR })
  isPrimary: string;

  @Column({ defaultValue: null, type: DataType.DATE })
  leaseExpiryDate: Date;

  @Column({ defaultValue: '0', type: DataType.INTEGER, allowNull: false })
  canTenantInitiate: number;

  @Column({ defaultValue: null, type: DataType.ENUM(null, 'Active') })
  status: 'Active' | null;

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
