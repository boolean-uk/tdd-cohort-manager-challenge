const { CohortManager, Cohort, Student } = require('./../src/cohortManager.js')

describe('Cohort', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should remove student by ID', () => {
    // setup
    const cohort1 = new Cohort('cohort 1')
    const student1 = new Student('John', 'Doe')
    student1.id = 1
    student1.cohort = 'cohort 1'
    cohort1.students.push(student1)
    const expected = cohort1
    cohortManager.createCohort('Cohort 1')
    cohortManager.createStudent('John', 'Doe')
    cohortManager.createStudent('Jane', 'Doe')
    cohortManager.addStudentToCohort(1, 'Cohort 1')
    cohortManager.addStudentToCohort(2, 'Cohort 1')

    // execute
    cohortManager.cohorts[0].removeStudent(2)
    const result = cohortManager.cohorts[0]
    // verify
    expect(result).toEqual(expected)
  })

  it(' Should remove student by ID, but return error if no student found', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    // execute & verify
    expect(() => {
      cohortManager.cohorts[0].removeStudent(2)
    }).toThrow(new Error('No student with this ID'))
  })
})
