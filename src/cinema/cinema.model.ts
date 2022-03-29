import { Table, Model, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { Film } from "../films/films.model";
import { Session } from "../sessions/session.model";
import { Halls } from "../halls/halls.model";
import { ManyToOne, OneToMany } from "typeorm";

interface CinemaCreationAttr{
  name: string;
  address: string;
}

@Table({createdAt: false, updatedAt: false})
export class Cinema extends Model<Cinema, CinemaCreationAttr>{
  @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
  id: number;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  address: string;

  @HasMany(() => Halls)
  halls: Halls[];
}