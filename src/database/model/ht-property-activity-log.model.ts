import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface IhtPropertyActivityLog {
  id: string;
  propertyId: string;
  rent_paid: string;
}

@Table({ tableName: 'ht_property_log', underscored: false, timestamps: false })
export class HtPropertyActivityLog extends Model<IhtPropertyActivityLog> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  propertyId: string;

  @Column({ allowNull: false, type: DataType.TINYINT, defaultValue: 0 })
  rentPaid: string;
}
