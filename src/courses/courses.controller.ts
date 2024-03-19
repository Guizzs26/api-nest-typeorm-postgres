import {
  Controller,
  Body,
  Param,
  Res,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  listAll() {
    return 'Listagem de Cursos';
  }

  @Get()
  findAllWithRes(@Res() response) {
    return response.status(200).json({
      message: 'Enviando uma mensagem com o decoretor Res do express',
    });
  }

  @Get(':id')
  listOne(@Param('id') id: string) {
    return `Listando o curso com o id ${id}`;
  }

  @Get(':id/:name')
  listOneManyParams(@Param('id') id: string, @Param('name') name: string) {
    return `Listando o curso com o id ${id} e nome ${name}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);

    return `Update do curso com id ${id} e com os possíveis dados do body ${body}`;
  }

  @HttpCode(204)
  // @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deletendo o curso com o id ${id}`;
  }
}
