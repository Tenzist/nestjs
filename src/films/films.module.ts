import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Film } from "./films.model";
import { FilmsController } from "./films.controller";
import { FilmsService } from "./films.service";
import { Halls } from "../halls/halls.model";
import { Session } from "../sessions/session.model";
import { HallsModule } from "../halls/halls.module";

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports: [
    SequelizeModule.forFeature([Film, Halls, Session])
  ],
})
export class FilmsModule {}
