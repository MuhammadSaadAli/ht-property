import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { HtProperty, HtPropertyAttributes } from './HtProperty';

export interface HtRentDetailAttributes {
  id?: string;
  propertyId: string;
  amount?: number;
  ats?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  property?: HtPropertyAttributes | null;
}

@Table({ tableName: 'ht_rent_detail', timestamps: false })
export class HtRentDetail
  extends Model<HtRentDetailAttributes, HtRentDetailAttributes>
  implements HtRentDetailAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({ type: DataType.CHAR(36) })
  propertyId!: string;

  @Column({ allowNull: true, type: DataType.DOUBLE(10, 2) })
  amount?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE(10, 2) })
  ats?: number;

  @Column({
    type: DataType.DATE,
    comment: 'Credit from Background company',
    defaultValue: DataType.NOW,
  })
  createdAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.DATE })
  deletedAt?: Date;

  @BelongsTo(() => HtProperty, 'propertyId')
  property?: HtProperty | null;
}
