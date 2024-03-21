import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCoursesTagsColumnsToCoursesTagsTable1710986409505
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags_tags',
      new TableColumn({
        name: 'coursesId',
        type: 'uuid',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('courses_tags_tags', 'coursesId');
  }
}
