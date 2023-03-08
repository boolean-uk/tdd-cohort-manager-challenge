const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('The Cohort Manager should be able to', () => {
  beforeEach(() => {
    cm = new CohortManager()
  })

  it('create a new cohort with a name', () => {
    //set up
    const expected = [new Cohort('test')]
    //execute
    cm.createCohort('test')
    //verify
    expect(cm.cohorts).toEqual(expected)
  })

  it('create multiple cohorts', () => {
    //set up
    const expected = [
      new Cohort('test1'),
      new Cohort('test2'),
      new Cohort('test3')
    ]
    //execute
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    //verify
    expect(cm.cohorts).toEqual(expected)
  })
})
