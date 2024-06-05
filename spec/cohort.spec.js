/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import CohortManager, { Cohort, Student } from '../src/cohort.js'

describe('CohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should exist', () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('should create a cohort with a cohort name', () => {
    const result = cohortManager.createCohort('Class of 24')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.name).toBe('Class of 24')
  })

  it('should search for a cohort by cohort name', () => {
    const result1 = cohortManager.createCohort('Class of 24')
    const result2 = cohortManager.search('Class of 24')

    expect(result1).toBeInstanceOf(Cohort)
    expect(result1.name).toBe('Class of 24')
    expect(result2).toBeInstanceOf(Cohort)
    expect(result2.name).toBe('Class of 24')
    expect(result1).toBe(result2)
  })

  it('should remove a cohort by cohort name', () => {
    cohortManager.createCohort('Class of 2022')
    cohortManager.createCohort('Class of 2023')
    cohortManager.createCohort('Class of 2024')

    expect(cohortManager.cohorts.length).toBe(3)
    cohortManager.remove('Class of 2023')
    expect(cohortManager.cohorts.length).toBe(2)
  })

  it('should remove student from a specific cohort', () => {
    const cohort1 = cohortManager.createCohort('Class of 2022')
    const cohort2 = cohortManager.createCohort('Class of 2023')
    const cohort3 = cohortManager.createCohort('Class of 2024')

    const student1 = cohortManager.createStudent(
      'Terrence',
      'Howard',
      'terry',
      'terry@how.ard'
    )

    const result = cohortManager.addStudentToCohort(student1, cohort2)
    const cohort = cohortManager.search('Class of 2023')
    expect(cohort.students.length).toBe(1)
    cohortManager.removeStudentFromCohort('Terrence', 'Class of 2023')
    expect(cohort.students.length).toBe(0)
  })

  it('should add student to a specific cohort', () => {
    const cohort1 = cohortManager.createCohort('Class of 2022')
    const cohort2 = cohortManager.createCohort('Class of 2023')
    const cohort3 = cohortManager.createCohort('Class of 2024')

    const student1 = cohortManager.createStudent(
      'Terrence',
      'Howard',
      'terry',
      'terry@how.ard'
    )

    const result = cohortManager.addStudentToCohort(student1, cohort2)
    expect(result).toBeInstanceOf(Student)
    expect(cohort2.students.length).toBe(1)
    expect(result.cohortID).toBe(cohort2.id)
  })
})
describe('Extended Criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should search for student by student ID', () => {
    const cohort = cohortManager.createCohort('Class of 2023')

    const student1 = cohortManager.createStudent(
      'Terrence',
      'Howard',
      'terry',
      'terry@how.ard'
    )
    const student2 = cohortManager.createStudent(
      'Jasmine',
      'Hercules',
      'terry',
      'terry@how.ard'
    )
    const student3 = cohortManager.createStudent(
      'Jericho',
      'Cleopatra',
      'terry',
      'terry@how.ard'
    )

    cohortManager.addStudentToCohort(student1, cohort)
    cohortManager.addStudentToCohort(student2, cohort)
    cohortManager.addStudentToCohort(student3, cohort)

    const result = cohortManager.searchByStudentID(1)
    expect(result.studentID).toBe(1)
    expect(() => {
      cohortManager.searchByStudentID(100)
    }).toThrow()
  })

  it('should fix capacity at 24 students. Adding student is not possible beyond the 24 limit.', () => {
    const cohort = cohortManager.createCohort('Class of 2023')
    let student
    for (let i = 0; i < 24; i++) {
      student = cohortManager.createStudent(
        'Jericho',
        'Cleopatra',
        'Jeri',
        'Jeri@cleo.com'
      )
      cohortManager.addStudentToCohort(student, cohort)
    }
    expect(cohort.students.length).toBe(24)
    expect(() => {
      student = cohortManager.createStudent(
        'Amsterdam',
        'Schipol',
        'DAM',
        'dam@coffee.haus'
      )
      cohortManager.addStudentToCohort(student, cohort)
    }).toThrow()
  })
})
