import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Cinema } from "../cinema/cinema.model";
import { Session } from "../sessions/session.model";
import { Halls } from "../halls/halls.model";

interface FilmsCreationAttr{
  name: string;
  year: number;
}

@Table({createdAt: false, updatedAt: false})
export class Film extends Model<Film, FilmsCreationAttr>{
  @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
  id: number;
  @Column({type: DataType.STRING, allowNull: false})
  name: string;
  @Column({type: DataType.INTEGER, allowNull: false})
  year: number;

  @BelongsToMany(() => Halls, () => Session)
  halls: Halls[];
}