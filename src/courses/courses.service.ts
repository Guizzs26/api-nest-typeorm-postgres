import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Curso sobre os fundamentos do NestJS',
      tags: ['node.js', 'nest.js', 'typescript', 'docker'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new HttpException(
        `Curso ID ${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );

      // throw new NotFoundException();
    }

    return course;
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  update(id: number, updateCourseDTO: any) {
    const existingCourse = this.findOne(id);

    if (existingCourse as any) {
      const index = this.courses.findIndex((course) => course.id === id);

      this.courses[index] = {
        id,
        ...updateCourseDTO,
      };
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);

    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
