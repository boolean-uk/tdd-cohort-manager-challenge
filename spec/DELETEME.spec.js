// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE
import CohortManager, { Cohort } from '../src/DELETEME.js'
describe("CohortManger", () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it("should exist", () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it("should create a new cohort", () => {
    const result = cohortManager.createCohort('cohort 12')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.id).toBe(1)
    expect(result.cohortName).toBe('cohort 12')

  })

  it("should create multiple cohorts with incrementing id", () => {
    const result2 = cohortManager.createCohort('cohort 13')
    const result3 = cohortManager.createCohort('cohort 14')

    expect(result2).toBeInstanceOf(Cohort)
    expect(result2.id).toBe(1)
    expect(result2.cohortName).toBe('cohort 13')

    expect(result3).toBeInstanceOf(Cohort)
    expect(result3.id).toBe(2)
    expect(result3.cohortName).toBe('cohort 14')

    expect(cohortManager.cohorts.length).toBe(2)
  })
})
