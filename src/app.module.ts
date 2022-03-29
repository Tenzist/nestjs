import { Module } from '@nestjs/common';
import { CinemaModule } from './cinema/cinema.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { Cinema } from "./cinema/cinema.model";
import { ConfigModule } from "@nestjs/config";
import { FilmsModule } from "./films/films.module";
import { Film } from "./films/films.model";
import { HallsModule } from "./halls/halls.module";
import { Session } from "./sessions/session.model";
import { Halls } from "./halls/halls.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Cinema, Halls, Session, Film],
      autoLoadModels: true,
    }),
    CinemaModule,
    HallsModule,
    FilmsModule,
  ],
})
export class AppModule {}