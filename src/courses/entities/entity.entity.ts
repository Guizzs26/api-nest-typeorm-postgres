import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Course } from './course.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];
}