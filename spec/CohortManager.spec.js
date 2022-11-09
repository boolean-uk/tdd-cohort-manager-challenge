const CohortManager = require('../src/CohortManager')

describe('addCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('should add and return all the cohorts and the added cohort', () => {
    cohortM.addCohort('test 1')
    cohortM.addCohort('test 2')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.cohorts[1].name).toBe('test 2')
  })

  it('the new cohort name must contain only letters and numbers', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('test 1?')).toBe('invalid name')
  })
  it('the new cohort must have a name', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('')).toBe('invalid name')
  })

  it("should return 'cohort already exist' if there's another cohort with the same name", () => {
    cohortM.cohorts = [{ name: 'test 1', capacity: 24, students: [] }]
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('test 1')).toBe('cohort already exist')
  })
})
