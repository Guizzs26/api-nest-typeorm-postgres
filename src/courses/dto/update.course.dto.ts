import { CreateCourseDTO } from './create.course.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {}
