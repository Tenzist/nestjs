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
  @Get('/all')
  getAll() {
    return this.hallServise.getAll();
  }
  @Get()
  getWorking(){
      return this.hallServise.getWorking();
    }
  @Get('/:id')
  getByYear(@Param('id')id: number){
    return this.hallServise.getById(id);
  }
}
