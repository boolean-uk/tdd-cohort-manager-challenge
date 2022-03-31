const Student = require('../src/student.js')
const CohortManager = require('../src/cohort-manager.js')
const Cohort = require('../src/cohort.js')

describe('Cohort', () => {
  it('Create a Cohort with a Cohort Name', () => {
    // set up
    const cohortManager = new CohortManager()

    const cohort = new Cohort('Cohort 1')
    // execute
    // verify
    const result = cohortManager.createCohorts(cohort)
    expect(result).toEqual('Cohort 1')
  })

  it('Search returns a cohort if it exists', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')

    cohortManager.createCohorts(cohort)
    // execute
    // verify
    const foundCohort = cohortManager.searchForCohort('Cohort 1')
    expect(foundCohort).toEqual(cohort)
  })

  it("Search returns false if cohort doesn't exist", () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 2')

    cohortManager.createCohorts(cohort)
    // execute
    //vefity
    const cohortNotFound = cohortManager.searchForCohort('Cohort 1')
    expect(cohortNotFound).toEqual(false)
  })

  // it("Remove Cohort name", () => {

  //     const cohortManager = new CohortManager
  //     const cohort = new Cohort('Cohort 1')
  //     const expected = [cohort]

  //     cohortManager.createCohorts(cohort)
  //     // execute
  //     //vefity
  //     const removedCohort = cohortManager.removeCohort('Cohort 1')
  //     expect(removedCohort).toEqual(expected)
  // })

  // it("Remove Cohort that doesn't exist", () => {

  //     const cohortManager = new CohortManager
  //     const cohort = new Cohort('Cohort 1')
  //     const expected = []

  //     cohortManager.createCohorts(cohort)
  //     // execute
  //     //vefity
  //     console.log(cohort)
  //     const removedCohort = cohortManager.removeCohort('Cohort 2')
  //     expect(removedCohort).toEqual(expected)
  // })
})
