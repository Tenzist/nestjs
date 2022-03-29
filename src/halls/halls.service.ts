import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Halls } from "./halls.model";
import { HallsDto } from "./dto/halls.dto";
import { Film } from "../films/films.model";
import { Session } from "../sessions/session.model";
import { count } from "rxjs";
import sequelize, { col, Op } from "sequelize";
import { Cinema } from "../cinema/cinema.model";
import { type } from "os";

@Injectable()
export class HallsService {

  constructor(@InjectModel(Halls) private hallsRep: typeof Halls) {}

  async create(dto: HallsDto){
    return this.hallsRep.create(dto);
  }
  async getAllHalls(){
    return this.hallsRep.findAll()
  }
  async getAll(){
  return this.hallsRep.findAll({include: {all: true}})
}
  async getWorking(){
    return this.hallsRep.findAll({where: {isWorking: true}})
  }
  async getHallSessionsCount(){
    let hallSessions = [];
    const hallAmount = await this.hallsRep.count()
    let count;
    for (let a = 1; a <= hallAmount; a++) {
      count = await Session.count({ where: { hallsId: a } });

      hallSessions.push(await this.hallsRep.findByPk(a, {
        attributes: [['id', 'Hall ID'],
          [sequelize.literal(count),'sessions']]
      }))
    }
    return hallSessions;
  }

  async  getById(id: number){
    return await this.hallsRep.findByPk(id, {include: [Film]});
  }

  async  getHallSessions(id: number){
    return await this.hallsRep.findByPk(id);
  }

}

