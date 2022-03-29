import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { HallsService } from "./halls.service";
import { HallsDto } from "./dto/halls.dto";

@Controller('halls')
export class HallsController {
  constructor(private hallServise: HallsService) {}

  @Post()
  create(@Body() hall: HallsDto){
    return this.hallServise.create(hall);
  }
  @Get()
  getAllHalls() {
    return this.hallServise.getAllHalls();
  }
  @Get('/all')
  getAll() {
    return this.hallServise.getAll();
  }
  @Get('/sessions-count')
  async getTop() {
    return this.hallServise.getHallSessionsCount();
  }
  @Get('/:id/session')
  async getHallSessions(@Param('id')id: number){
    return this.hallServise.getHallSessions(id);
  }
  @Get('/:id')
  async getById(@Param('id')id: number){
    return this.hallServise.getById(id);
  }

}
