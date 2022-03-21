import { Body, Controller, Get, Post } from "@nestjs/common";
import { CinemaService } from "./cinema.service";
import { CinemaDto } from "./dto/cinema.dto";


@Controller('cinema')
export class CinemaController {
constructor(private cinemaServise: CinemaService) {}

  @Post()
  create(@Body() cinema: CinemaDto){
    return this.cinemaServise.createCinema(cinema);
  }
  @Get()
  getAll(){
    return this.cinemaServise.getAll();
  }
}
