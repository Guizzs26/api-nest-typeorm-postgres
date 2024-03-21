import { randomUUID } from 'crypto';
import { CoursesService } from './courses.service';

describe('CoursesService unit tests', () => {
  let service: CoursesService;
  let id: string;
  let created_at: Date;
  let expectedOutputTags: any;
  let expectedOutputCourses: any;
  let mockCourseRepository: any;
  let mockTagRepository: any;

  beforeEach(async () => {
    service = new CoursesService();

    id = randomUUID();
    created_at = new Date();

    expectedOutputTags: [
      {
        id,
        name: 'nestJs',
        created_at: created_at,
      },
    ];

    expectedOutputCourses = {
      id,
      name: 'test',
      description: 'test description',
      created_at,
      tags: expectedOutputTags,
    };

    mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      preload: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      findAll: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
      findOne: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
    };

    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
      findOne: jest.fn(),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
