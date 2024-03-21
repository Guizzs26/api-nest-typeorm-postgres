import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { randomUUID } from 'crypto';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }

    this.id = randomUUID();
  }
}
