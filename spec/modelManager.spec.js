const CohortManager = require(`../src/CohortManager.js`)
const Cohort = require(`../src/Cohort.js`)

describe('Model Manager Class', () => {
  let cohortManager
  let cohort1
  let cohort2

  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort1 = new Cohort('Cohort 1')
    cohort2 = new Cohort('Cohort 5')
  })

  it('should create a new cohort', () => {
    // setup
    const expectedResult = [cohort1, cohort2]
    // execute
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 5')
    // verify
    expect(cohortManager.getAllCohorts()).toEqual(expectedResult)
  })
  it("should return the correct cohort", () => {
    //setup
    const expectedResult = cohort2
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 5')
    //execute
    const result = cohortManager.searchCohort('Cohort 5')
    // verify
    expect(result).toEqual(expectedResult)
  })
})
