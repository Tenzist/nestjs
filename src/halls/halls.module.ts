import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { HallsService } from "./halls.service";
import { Halls } from "./halls.model";
import { HallsController } from "./halls.controller";
import { Film } from "../films/films.model";
import { Session } from "../sessions/session.model";
import { Cinema } from "../cinema/cinema.model";


@Module({
  controllers: [HallsController],
  providers: [HallsService],
  imports: [
    SequelizeModule.forFeature([Halls, Cinema,  Film, Session])
  ],
})

export class HallsModule {}
