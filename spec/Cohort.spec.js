const Cohort = require('../src/Cohort.js')
const CohortManager = require('../src/CohortManager.js')
const Student = require('../src/Student.js')
describe('Cohort', () => {
  let cohort
  let cohortManager
  beforeEach(() => {
    cohort = new Cohort()
    cohortManager = new CohortManager()
  })

  it('add a new student', () => {
    const expected = new Student(
      'A.1',
      'Abul',
      'kibria',
      'akibria',
      'ahkibria@hotmail.co.uk'
    )
    const result = cohort.addStudent(
      'A.1',
      'Abul',
      'kibria',
      'akibria',
      'ahkibria@hotmail.co.uk'
    )

    expect(result).toEqual(expected)
  })
})
