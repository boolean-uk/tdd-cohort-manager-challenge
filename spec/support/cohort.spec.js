import Cohort from '../../src/cohort.js'

describe('Cohort Operations', () => {
  it('creates a cohort with a name', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const result = cohort.cohortList
    expect(result[0].name).toEqual(cohortName)
  })
  it('searches a cohort by name', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const foundCohort = cohort.searchCohortByName(cohortName)

    expect(foundCohort).toBeDefined()
    expect(foundCohort.name).toEqual(cohortName)
  })
})
