import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1710983440953 } from 'src/migrations/1710983440953-CreateCoursesTable';
import { CreateTagsTable1710984626456 } from 'src/migrations/1710984626456-CreateTagsTable';
import { CreateCoursesTagsTable1710985298566 } from 'src/migrations/1710985298566-CreateCoursesTagsTable';
import { AddCoursesTagsColumnsToCoursesTagsTable1710986409505 } from 'src/migrations/1710986409505-AddCoursesTagsColumnsToCoursesTagsTable';
import { AddForeignKeyToCoursesTagsTable1710986625261 } from 'src/migrations/1710986625261-AddForeignKeyToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1710987011470 } from 'src/migrations/1710987011470-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/course.entity';
import { Tag } from 'src/courses/entities/entity.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  migrations: [
    CreateCoursesTable1710983440953,
    CreateTagsTable1710984626456,
    CreateCoursesTagsTable1710985298566,
    AddCoursesTagsColumnsToCoursesTagsTable1710986409505,
    AddForeignKeyToCoursesTagsTable1710986625261,
    AddTagsIdToCoursesTagsTable1710987011470,
  ],
});
