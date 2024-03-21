import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddForeignKeyToCoursesTagsTable1710986625261
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'courses_tags_tags',
      new TableForeignKey({
        name: 'courses_tags_courses',
        columnNames: ['coursesId'],
        referencedTableName: 'courses',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'courses_tags_tags',
      'courses_tags_courses',
    );
  }
}
