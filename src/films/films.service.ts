import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Film } from "./films.model";
import { FilmsDto } from "./dto/films.dto";
import { Halls } from "../halls/halls.model";
import { Session } from "../sessions/session.model";
import sequelize, { where } from "sequelize";
import { HallsService } from "../halls/halls.service";
import { getPriority } from "os";
import { getValueOfPath } from "@nestjs/cli/lib/compiler/helpers/get-value-or-default";
import { log } from "util";

@Injectable()
export class FilmsService {
  constructor(@InjectModel(Film) private filmRep: typeof Film) {}

  async create(dto: FilmsDto){
    const film = await this.filmRep.create(dto);
    return film;
  }
  async getAll(){
    return this.filmRep.findAll({include: {all: true}})
  }
  async getAllFilms(){
    return this.filmRep.findAll()
  }
  async getTop(query){
    let filmRating = [];
    const hallAmount = await this.filmRep.count()
    for (let a = 1; a <= hallAmount; a++) {
      const count = await Session.count({ where: { filmId: a } });
      filmRating.push(await this.filmRep.findByPk(a, {
        attributes: ['name',
          [sequelize.literal(String(count)),'session'],
        ]
      }))
    }
    filmRating.sort(function(a,b){
      const {dataValues: first} = a;
      const {dataValues: second} = b;

      if(first.session < second.session){
        return 1;
      }
      if(first.session > second.session){
        return -1;
      }
      return 0
    })
    if(query.sort == 123){
      filmRating.reverse();
    }


    return filmRating;
  }

  async getById(id: number){
    return await this.filmRep.findByPk(id, {include: [Halls]});
  }
}
