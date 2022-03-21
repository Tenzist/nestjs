import { Module } from '@nestjs/common';
import { CinemaModule } from './cinema/cinema.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cinema } from "./cinema/cinema.model";
import { ConfigModule } from "@nestjs/config";


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
      models: [Cinema],
      autoLoadModels: true,
    }),
    CinemaModule,
  ],
})
export class AppModule {}