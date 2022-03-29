import { Table, Model, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { Cinema } from "../cinema/cinema.model";
import { Session } from "../sessions/session.model";
import { Halls } from "../halls/halls.model";
import { JoinTable, ManyToMany } from "typeorm";

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

  @HasMany(() => Session)
  session: Session[];

  @BelongsToMany(() => Halls, () => Session)
  halls: Halls[];
}