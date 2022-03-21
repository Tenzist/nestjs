import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Cinema } from "./cinema.model";
import { CinemaDto } from "./dto/cinema.dto";

@Injectable()
export class CinemaService {

  constructor(@InjectModel(Cinema) private  cinemaRep: typeof Cinema) {
  }

  async createCinema(dto: CinemaDto){
    return this.cinemaRep.create(dto)
  }
  async getAll(){
    return this.cinemaRep.findAll()
  }
}
