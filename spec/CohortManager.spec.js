const { CohortManager } = require('../src/CohortManager')

describe('CohortManager class', () => {
  let Manager
  beforeEach(() => {
    Manager = new CohortManager()
  })

  // createCohort
  it('expects the cohort to be created', () => {
    expect(Manager.createCohort('Software')).toBeTrue()
    expect(Manager.cohorts).toHaveSize(1)
  })

  // createCohort && getUniqueCohortID
  it('expects to have a unique id everytime it creates new cohort', () => {
    Manager.createCohort('Software')
    expect(Manager.createCohort('Hardware')).toBeTrue()
    expect(Manager.cohorts[1].cohortID).toBe(2)
  })

  // createCohort && isCohortNameUnique
  it('expects the create cohort to return false because of a non unique name', () => {
    Manager.createCohort('Software')
    expect(Manager.createCohort('Software')).toBeFalse()
  })
})
