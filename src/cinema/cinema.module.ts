import { Module } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Cinema } from "./cinema.model";

@Module({
  controllers: [CinemaController],
  providers: [CinemaService],
  imports: [
    SequelizeModule.forFeature([Cinema])
  ],
})
export  class CinemaModule{}
