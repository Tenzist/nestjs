import { Table, Model, Column, DataType, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Film } from "../films/films.model";
import { Halls } from "../halls/halls.model";
import { Cinema } from "../cinema/cinema.model";

  @Table({tableName: 'session', createdAt: false, updatedAt: false})
export class Session extends Model<Session>{
  static find(): any {
      throw new Error('Method not implemented.');
  }

  @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => Film)
  @Column({type: DataType.INTEGER})
  filmId: number;

  @ForeignKey(() => Halls)
  @Column({type: DataType.INTEGER})
  hallsId: number;

  @BelongsTo(() => Halls)
  halls: Halls

  @BelongsTo(() => Film)
  film: Film
}