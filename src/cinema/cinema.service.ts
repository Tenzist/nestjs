import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Cinema } from "./cinema.model";
import { CinemaDto } from "./dto/cinema.dto";
import { Halls } from "../halls/halls.model";

@Injectable()
export class CinemaService {

  constructor(@InjectModel(Cinema) private  cinemaRep: typeof Cinema) {
  }

  async create(dto: CinemaDto){
    return this.cinemaRep.create(dto)
  }
  async getAll(){
    return this.cinemaRep.findAll({include: {all: true}})
  }
  async getAllCinemas(){
    return this.cinemaRep.findAll()
  }

  async getById(id: string){
    return await this.cinemaRep.findByPk(id, {include: [Halls]});
  }
}
