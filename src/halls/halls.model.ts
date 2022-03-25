import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Film } from "../films/films.model";
import { Session } from "../sessions/session.model";
import { Cinema } from "../cinema/cinema.model";

interface HallsAttr{
  capacity: number
}

@Table({createdAt: false, updatedAt: false})
export class Halls extends Model<Halls, HallsAttr>{
  @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
  id: number;
  @Column({type: DataType.INTEGER, allowNull: false})
  capacity: number;
  @Column({type: DataType.BOOLEAN, defaultValue: true})
  isWorking: boolean;

  @ForeignKey(() => Cinema)
  @Column({type: DataType.INTEGER})
  cinemaID: number;

  @BelongsTo(() => Cinema)
  cinema: Cinema[];

  @BelongsToMany(() => Film, () => Session)
  film: Film[];
}