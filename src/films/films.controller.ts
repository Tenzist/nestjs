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
  @Get('/all')
  getAll(){
    return this.filmsService.getAll();
  }
  @Get()
  getAllFilms(){
    return this.filmsService.getAllFilms();
  }
  @Get('/top')
  getTop() {
    return this.filmsService.getTop();
  }
  @Get('/:id')
  async getById(@Param('id')id: number){
    return this.filmsService.getById(id);
  }
}

