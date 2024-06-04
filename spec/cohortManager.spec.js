import CohortManager from '../src/cohortManager.js';
import Student from '../src/student.js';

describe('CohortManager', () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it('should create a cohort with a cohort name', () => {
    cohortManager.createCohort('Cohort 1');
    expect(cohortManager.searchCohort('Cohort 1')).toBeTruthy();
  });

  it('should search for a cohort by cohort name', () => {
    cohortManager.createCohort('Cohort 2');
    const cohort = cohortManager.searchCohort('Cohort 2');
    expect(cohort.name).toBe('Cohort 2');
  });

  it('should add a student to a specific cohort', () => {
    cohortManager.createCohort('Cohort 3');
    const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
    cohortManager.addStudentToCohort('Cohort 3', student);
    const cohort = cohortManager.searchCohort('Cohort 3');
    expect(cohort.students.length).toBe(1);
    expect(cohort.students[0].firstName).toBe('John');
  });

  it('should remove a cohort by cohort name', () => {
    cohortManager.createCohort('Cohort 4');
    cohortManager.removeCohort('Cohort 4');
    expect(() => cohortManager.searchCohort('Cohort 4')).toThrowError('Cohort not found');
  });

  it('should remove a student from a specific cohort', () => {
    cohortManager.createCohort('Cohort 5');
    const student = new Student(2, 'Jane', 'Doe', 'janedoe', 'jane@example.com');
    cohortManager.addStudentToCohort('Cohort 5', student);
    cohortManager.removeStudentFromCohort('Cohort 5', 2);
    const cohort = cohortManager.searchCohort('Cohort 5');
    expect(cohort.students.length).toBe(0);
  });

  it('should throw an error if cohort not found', () => {
    expect(() => cohortManager.searchCohort('Nonexistent Cohort')).toThrowError('Cohort not found');
  });

  it('should throw an error if student not found in cohort', () => {
    cohortManager.createCohort('Cohort 6');
    expect(() => cohortManager.removeStudentFromCohort('Cohort 6', 999)).toThrowError('Student not found in cohort');
  });

  it('should search for student by student ID', () => {
    cohortManager.createCohort('Cohort 7');
    const student = new Student(3, 'Alice', 'Smith', 'alicesmith', 'alice@example.com');
    cohortManager.addStudentToCohort('Cohort 7', student);
    const foundStudent = cohortManager.searchStudentById(3);
    expect(foundStudent.firstName).toBe('Alice');
  });

  it('should not add more than 24 students to a cohort', () => {
    cohortManager.createCohort('Cohort 8');
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudentToCohort('Cohort 8', new Student(i, `First${i}`, `Last${i}`, `user${i}`, `user${i}@example.com`));
    }
    expect(() => cohortManager.addStudentToCohort('Cohort 8', new Student(25, 'Extra', 'Student', 'extrastudent', 'extra@example.com'))).toThrowError('Cohort is full');
  });

  it('should not allow cohorts with the same name', () => {
    cohortManager.createCohort('Unique Cohort');
    expect(() => cohortManager.createCohort('Unique Cohort')).toThrowError('Cohort name already exists');
  });

  it('should not allow an unnamed cohort', () => {
    expect(() => cohortManager.createCohort('')).toThrowError('Cohort name is required');
  });

  it('should not allow the same student in multiple cohorts', () => {
    cohortManager.createCohort('Cohort 9');
    cohortManager.createCohort('Cohort 10');
    const student = new Student(4, 'Duplicate', 'Student', 'duplicatestudent', 'duplicate@example.com');
    cohortManager.addStudentToCohort('Cohort 9', student);
    expect(() => cohortManager.addStudentToCohort('Cohort 10', student)).toThrowError('Student already in a cohort');
  });

  it('should search for students by name and return all matching results', () => {
    cohortManager.createCohort('Cohort 11');
    cohortManager.createCohort('Cohort 12');
    const student1 = new Student(5, 'Match', 'Name', 'matchname1', 'match1@example.com');
    const student2 = new Student(6, 'Match', 'Name', 'matchname2', 'match2@example.com');
    cohortManager.addStudentToCohort('Cohort 11', student1);
    cohortManager.addStudentToCohort('Cohort 12', student2);
    const matches = cohortManager.searchStudentsByName('Match');
    expect(matches.length).toBe(2);
  });
});
