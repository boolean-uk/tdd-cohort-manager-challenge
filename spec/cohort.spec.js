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
    cohortManager.createCohort('Class of 2022')
    cohortManager.createCohort('Class of 2023')
    cohortManager.createCohort('Class of 2024')

    cohortManager.addStudentToCohort(
      {
        firstName: 'Terrence',
        lastName: 'Howard',
        githubUsername: 'terry',
        email: 'terry@how.ard'
      },
      'Class of 2023'
    )
    cohortManager.addStudentToCohort(
      {
        firstName: 'Jasmine',
        lastName: 'Hercules',
        githubUsername: 'terry',
        email: 'terry@how.ard'
      },
      'Class of 2023'
    )
    cohortManager.addStudentToCohort(
      {
        firstName: 'Jericho',
        lastName: 'Cleopatra',
        githubUsername: 'terry',
        email: 'terry@how.ard'
      },
      'Class of 2023'
    )
    const cohort = cohortManager.search('Class of 2023')
    expect(cohort.students.length).toBe(3)
    cohortManager.removeStudentFromCohort('Terrence', 'Class of 2023')
    expect(cohort.students.length).toBe(2)
  })

  it('should add student to a specific cohort', () => {
    // eslint-disable-next-line no-unused-vars
    const cohort1 = cohortManager.createCohort('Class of 2022')
    const cohort2 = cohortManager.createCohort('Class of 2023')
    // eslint-disable-next-line no-unused-vars
    const cohort3 = cohortManager.createCohort('Class of 2024')

    const result = cohortManager.addStudentToCohort(
      {
        firstName: 'Terrence',
        lastName: 'Howard',
        githubUsername: 'terry',
        email: 'terry@how.ard'
      },
      'Class of 2023'
    )
    expect(result).toBeInstanceOf(Student)
    expect(cohort2.students.length).toBe(1)
  })
})
