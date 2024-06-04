import CohortManager from '../src/CohortManager.js'
import Cohort from '../src/Cohort.js'

describe('Cohort Manager', () => {
  it('should create a cohort', function () {
    let cohort = new Cohort('test')
    expect(cohort.getName()).toBeInstanceOf(String)
    expect(cohort.getName()).toBeTruthy()
  })

  it('should have students', function () {
    let cohort = new Cohort('test')
    expect(cohort.students[0].id).toEqual(1)
  })

  it('should search for a cohort by name', function () {
    let cohorts = new CohortManager([new Cohort('test')])
    let foundCohortName = cohorts.searchName('test')
    expect(typeof foundCohortName).toBe('string')
    expect(foundCohortName).toBeTruthy()
  })
  it('should add a student to a specific cohort', function () {
    let cohort = new Cohort('test')
    expect(cohort.studentAdded[0].id).toEqual(11)
    expect(cohort.studentAdded[0].firstName).toEqual('Peter')
    expect(cohort.studentAdded[0].lastName).toEqual('Parker')
    expect(cohort.studentAdded[0].githubUsername).toEqual('peterparker123')
    expect(cohort.studentAdded[0].email).toEqual(
      'definitelynotspiderman@gmail.com'
    )
  })
  it('should remove a cohort by name', function () {
    let cohort = new CohortManager([{ name: 'test' }])
    cohort.removeCohort('test')
    expect(Object.keys(cohort.cohorts).length).toBe(0)
  })
  it('should remove a student from a specific cohort', function () {
    let cohort = new Cohort([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 }
    ])
    cohort.removeStudent('1')
    expect(cohort.students.length).toBe(9)
  })
})
