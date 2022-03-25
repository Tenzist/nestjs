import { Table, Model, Column, DataType, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { Film } from "../films/films.model";
import { Halls } from "../halls/halls.model";

  @Table({tableName: 'session', createdAt: false, updatedAt: false})
export class Session extends Model<Session>{

  @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => Film)
  @Column({type: DataType.INTEGER})
  filmId: number;

  @ForeignKey(() => Halls)
  @Column({type: DataType.INTEGER})
  hallsId: number;

}