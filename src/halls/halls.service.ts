import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Halls } from "./halls.model";
import { HallsDto } from "./dto/halls.dto";
import { where } from "sequelize";

@Injectable()
export class HallsService {
  constructor(@InjectModel(Halls) private hallsRep: typeof Halls) {}

  async create(dto: HallsDto){
    return await this.hallsRep.create(dto);
  }
  async getAll(){
    return this.hallsRep.findAll()
  }
  async getWorking(){
    return this.hallsRep.findAll({where: {isWorking: true}})
  }
  async  getById(id: number){
    return await this.hallsRep.findAll({ where:{id} });
  }
}
