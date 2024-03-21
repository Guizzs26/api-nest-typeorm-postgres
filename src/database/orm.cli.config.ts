import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1710983440953 } from 'src/migrations/1710983440953-CreateCoursesTable';
import { CreateTagsTable1710984626456 } from 'src/migrations/1710984626456-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  migrations: [CreateCoursesTable1710983440953, CreateTagsTable1710984626456],
});
