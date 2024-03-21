import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './entity.entity';
import { randomUUID } from 'crypto';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }

    this.id = randomUUID();
  }
}
