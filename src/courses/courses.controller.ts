import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  listAll() {
    return this.courseService.findAll();
  }

  // @Get()
  // findAllWithRes(@Res() response) {
  //   return response.status(200).json({
  //     message: 'Enviando uma mensagem com o decoretor Res do express',
  //   });
  // }

  @Get(':id')
  listOne(@Param('id') id: number) {
    return this.courseService.findOne(+id);
  }

  // @Get(':id/:name')
  // listOneManyParams(@Param('id') id: number, @Param('name') name: string) {
  //   return `Listando o curso com o id ${id} e nome ${name}`;
  // }

  @Post()
  create(@Body() body) {
    return this.courseService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.courseService.update(+id, body);
  }

  @HttpCode(204)
  // @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(+id);
  }
}
