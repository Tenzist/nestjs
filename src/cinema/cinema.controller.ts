import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CinemaService } from "./cinema.service";
import { CinemaDto } from "./dto/cinema.dto";
import { HallsService } from "../halls/halls.service";

@Controller('cinema')
export class CinemaController {
constructor(private cinemaServise: CinemaService) {}

  @Post()
  create(@Body() cinema: CinemaDto){
    return this.cinemaServise.create(cinema);
  }
  @Get('/all')
  getAll(){
    return this.cinemaServise.getAll();
  }
  @Get()
  getAllCinemas(){
    return this.cinemaServise.getAllCinemas()
  }
  @Get('/:id')
  async getById(@Param('id')id: string){
  return this.cinemaServise.getById(id)
  }
}
