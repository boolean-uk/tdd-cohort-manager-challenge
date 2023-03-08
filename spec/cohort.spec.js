const CohortManager = require('../src/CohortList')
const Cohort = require('../src/cohort')
const Student = require('../src/student')

describe('cohort', () => {
  let cohortManager
  let cohort
  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort = new Cohort()
  })
  it('should add a new student', () => {
    const newStudent = new Student(
      'Joe',
      'Bloggs',
      'JoeBloggs',
      'joeBloggs@test.com',
      1
    )
    const expected = [newStudent]
    const result = cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'JoeBloggs',
      'joeBloggs@test.com'
    )
    expect(result).toEqual(expected)
  })
})
