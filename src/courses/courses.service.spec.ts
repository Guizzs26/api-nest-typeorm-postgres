import { randomUUID } from 'crypto';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create.course.dto';
import { UpdateCourseDTO } from './dto/update.course.dto';

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

  it('should create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDTO: CreateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDTO);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(newCourse);
  });

  it('should find all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(courses);
  });

  it('should find one course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(course);
  });

  it('should update one course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDTO: UpdateCourseDTO = {
      name: 'test',
      description: 'test description',
      tags: ['nestjs'],
    };

    const updatedCourse = await service.update(id, updateCourseDTO);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(updatedCourse);
  });

  it('should remove one course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const removedCourse = await service.remove(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(mockCourseRepository.remove).toHaveBeenCalled();
    expect(expectedOutputCourses).toStrictEqual(removedCourse);
  });
});
