const { CohortManager, Cohort, Student } = require('./../src/cohortManager.js')

describe('Student', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should create a student with valid properties', () => {
    // setup
    const student1 = new Student('John', 'Doe')
    student1.id = 1
    const expected = student1
    // execute
    const result = cohortManager.createStudent('John', 'Doe')
    // verify
    expect(result).toEqual(expected)
  })
})
