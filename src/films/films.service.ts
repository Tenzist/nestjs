import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Film } from "./films.model";
import { FilmsDto } from "./dto/films.dto";

@Injectable()
export class FilmsService {
  constructor(@InjectModel(Film) private filmRep: typeof Film) {}

  async create(dto: FilmsDto){
    return await this.filmRep.create(dto);
  }
  async getAll(){
    return this.filmRep.findAll()
  }
  async getByYear(id: number){
    return await this.filmRep.findByPk(id);
  }
}
