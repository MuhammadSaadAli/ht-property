import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface IHtRentDetails {
  id: string;
  propertyId: string;
  amount: number;
  ats: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
@Table({ tableName: 'ht_rent_detail', timestamps: false, underscored: false })
export class HtRentDetails extends Model<IHtRentDetails> {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  propertyId: string;

  @Column({ allowNull: false, type: DataType.DOUBLE })
  amount: number;

  @Column({ allowNull: false, type: DataType.DOUBLE })
  ats: number;

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
