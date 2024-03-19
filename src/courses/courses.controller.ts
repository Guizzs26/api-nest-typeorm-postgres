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
import { CreateCourseDTO } from './dto/create.course.dto';
import { UpdateCourseDTO } from './dto/update.course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  listAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  listOne(@Param('id') id: number) {
    return this.courseService.findOne(+id);
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.courseService.create(createCourseDTO);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDTO) {
    return this.courseService.update(+id, updateCourseDTO);
  }

  @HttpCode(204)
  // @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(+id);
  }

  // @Get()
  // findAllWithRes(@Res() response) {
  //   return response.status(200).json({
  //     message: 'Enviando uma mensagem com o decoretor Res do express',
  //   });
  // }

  // @Get(':id/:name')
  // listOneManyParams(@Param('id') id: number, @Param('name') name: string) {
  //   return `Listando o curso com o id ${id} e nome ${name}`;
  // }
}
