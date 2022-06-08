import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface IHtPropertyType {
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Table({ tableName: 'ht_property_type', timestamps: false, underscored: false })
export class HtPropertyType extends Model<IHtPropertyType> {
  @Column({
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id: string;

  @Column({ allowNull: true, type: DataType.STRING })
  type: string;

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
