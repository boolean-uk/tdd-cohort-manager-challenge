import CohortManager from '../src/cohortManager.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should be able to search for student by StudentID', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addStudentToCohort('student 1', 'cohort 1')
    cohortManager.addStudentToCohort('student 2', 'cohort 1')
    expect(cohortManager.getStudentById(0)).toEqual({
      id: 0,
      name: 'student 1'
    })
    expect(cohortManager.getStudentById(1)).toEqual({
      id: 1,
      name: 'student 2'
    })
  })

  it('Adding more than 24 students to a cohort should throw an error', function () {
    cohortManager.addCohort('cohort 1')
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudentToCohort(`student ${i}`, 'cohort 1')
    }
    expect(() =>
      cohortManager.addStudentToCohort('student 25', 'cohort 1')
    ).toThrow()
  })
})
