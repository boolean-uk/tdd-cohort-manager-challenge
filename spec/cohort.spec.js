import { Cohort, Student } from '../src/cohort'

describe('Cohort Manager', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort('SampleCohort')
  })

  test('should create a cohort', () => {
    cohort.create()
    expect(cohorts.length).toBe(1)
  })

  test('should search for a cohort by name', () => {
    cohort.create()
    const foundCohort = new Cohort('SampleCohort')
    expect(foundCohort.search()).toEqual(cohort)
  })

  test('should add a student to a cohort', () => {
    const student = new Student('18', 'John', 'Doe', 'johnDoeGitHub', 'john.doe@example.com')
    cohort.addStudent(student)
    expect(cohort.students.length).toBe(1)
  })

  test('should remove a cohort by name', () => {
    cohort.create()
    cohort.remove()
    expect(cohorts.length).toBe(0)
  });

  test('should remove a student from a cohort', () => {
    const student = new Student('19', 'Jane', 'Doe', 'janeDoeGitHub', 'jane.doe@example.com')
    cohort.addStudent(student)
    cohort.removeStudent(student)
    expect(cohort.students.length).toBe(0)
  })

  test('should throw an error if cohort not found during search', () => {
    expect(() => new Cohort('NonExistentCohort').search()).toThrow("Cohort 'NonExistentCohort' not found.")
  })

  test('should throw an error if student not found during removal', () => {
    const student = new Student('20', 'Alex', 'Smith', 'alexSmithGitHub', 'alex.smith@example.com')
    expect(() => cohort.removeStudent(student)).toThrow("Student '20' not found in 'SampleCohort'.")
  })

  test('should throw an error if cohort already exists during creation', () => {
    cohort.create()
    expect(() => cohort.create()).toThrow("Cohort 'SampleCohort' already exists.")
  })

  test('should throw an error if student already exists in cohort during addition', () => {
    const student = new Student('21', 'Bob', 'Johnson', 'bobJohnsonGitHub', 'bob.johnson@example.com')
    cohort.addStudent(student)
    expect(() => cohort.addStudent(student)).toThrow("Student '21' already exists in 'SampleCohort'.")
  })
})
