import { Table, Model, Column, DataType } from "sequelize-typescript";

interface CinemaCreationAttr{
  id: number;
  name: string
}

@Table
export class Cinema extends Model<Cinema, CinemaCreationAttr>{
  @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
  id: number;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  address: string;
}