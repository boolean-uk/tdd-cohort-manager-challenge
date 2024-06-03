import CohortManager, { Cohort } from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should create a cohort', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.createCohort('Cohort 16')

    expect(cohortManager.cohortList).toEqual([
      new Cohort(1, 'Cohort 12'),
      new Cohort(2, 'Cohort 16')
    ])
  })
})
