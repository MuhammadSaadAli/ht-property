import { Model, Table, Column, DataType } from 'sequelize-typescript';

export interface HtPropertyTypeAttributes {
  id?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

@Table({ tableName: 'ht_property_type', timestamps: false })
export class HtPropertyType
  extends Model<HtPropertyTypeAttributes, HtPropertyTypeAttributes>
  implements HtPropertyTypeAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  type?: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  deletedAt?: Date;
}
