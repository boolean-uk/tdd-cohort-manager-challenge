import CohortManager from '../src/CohortManager.js'
import Cohort from '../src/Cohort.js'

describe('Cohort Manager', () => {
  it('should create a cohort', function () {
    let cohort = new Cohort('test')
    expect(cohort.getName()).toBeInstanceOf(String)
    expect(cohort.getName()).toBeTruthy()
  })
  it('should search for a cohort by name', function () {
    let cohorts = new CohortManager([new Cohort('test')])
    let foundCohortName = cohorts.searchName('test')
    expect(typeof foundCohortName).toBe('string')
    expect(foundCohortName).toBeTruthy()
  })
})
