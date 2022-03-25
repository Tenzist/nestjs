import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { FilmsService } from "./films.service";
import { FilmsDto } from "./dto/films.dto";
import retryTimes = jest.retryTimes;

@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Post()
  create(@Body() dto: FilmsDto){
    return this.filmsService.create(dto);
  }
  @Get()
  getAll(){
    return this.filmsService.getAll();
  }
  @Get('/:year')
  getByYear(@Param('year')year: number){
    return this.filmsService.getByYear(year);
  }
}

