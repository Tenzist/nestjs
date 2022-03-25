import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Cinema } from "./cinema.model";
import { CinemaDto } from "./dto/cinema.dto";

@Injectable()
export class CinemaService {

  constructor(@InjectModel(Cinema) private  cinemaRep: typeof Cinema) {
  }

  async create(dto: CinemaDto){
    return this.cinemaRep.create(dto)
  }
  async getAll(){
    return this.cinemaRep.findAll()
  }
  async getByName(id: string){
    return this.cinemaRep.findOne({where: {id}})
  }
}
