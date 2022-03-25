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
  @Get('/:id')
  async getByYear(@Param('id')id: number){
    let message = await this.filmsService.getByYear(id);
    console.log(message.halls);
    return this.filmsService.getByYear(id);
  }
}

