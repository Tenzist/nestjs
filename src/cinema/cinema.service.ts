import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Cinema } from "./cinema.model";
import { CinemaDto } from "./dto/cinema.dto";
import { Halls } from "../halls/halls.model";
import { HallsService } from "../halls/halls.service";
import { HallsDto } from "../halls/dto/halls.dto";

@Injectable()
export class CinemaService {

  constructor(@InjectModel(Cinema) private  cinemaRep: typeof Cinema,
              private  hallServise: HallsService) {
  }

  async create(dto: CinemaDto){
    const cinema = await this.cinemaRep.create(dto)
    const hall = await this.hallServise.getFreeHall();
    if(hall != null){
      await cinema.$set('halls', [hall.id])
      return cinema;
    }else{

    }
    return "need a free hall";
  }
  async getAllCinemas(){
    return this.cinemaRep.findAll({ order:['id'] })
  }

  async getAll(){
    return this.cinemaRep.findAll({include: {all: true},order:['id'] })
  }

  async getById(id: string){
    return await this.cinemaRep.findByPk(id, {include: [Halls]});
  }
}
