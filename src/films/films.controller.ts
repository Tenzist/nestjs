import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { FilmsService } from "./films.service";
import { FilmsDto } from "./dto/films.dto";
import retryTimes = jest.retryTimes;

@Controller('films')
export class FilmsController {
  static findAll(): any {
      throw new Error("Method not implemented.");
  }
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
  getTop(@Query() query) {
    return this.filmsService.getTop(query);
  }
  @Get('/:id')
  async getById(@Param('id')id: number){
    return this.filmsService.getById(id);
  }
}

