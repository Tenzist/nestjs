import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CinemaService } from "./cinema.service";
import { CinemaDto } from "./dto/cinema.dto";

@Controller('cinema')
export class CinemaController {
constructor(private cinemaServise: CinemaService) {}

  @Post()
  create(@Body() cinema: CinemaDto){
    return this.cinemaServise.create(cinema);
  }
  @Get()
  getAll(){
    return this.cinemaServise.getAll();
  }
  @Get('/:id')
  getByName(@Param('id')id: string){
  return this.cinemaServise.getByName(id)
  }
}
