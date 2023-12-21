import CohortManager from '../src/cohortManager.js'

describe('CohortManager', () => {
  it('should create a cohort with a given name', () => {
    const cohortManager = new CohortManager()
    const cohortName = 'cohort-1'

    const result = cohortManager.createCohort(cohortName)

    expect(result.name).toBe(cohortName)
    expect(result.students).toEqual([])
  })

  it('should throw an error if cohort name is not unique', () => {
    const cohortManager = new CohortManager()
    const cohortName = 'cohort-11'

    cohortManager.createCohort(cohortName)
    expect(() => {
      cohortManager.createCohort(cohortName)
    }).toThrowError('Cohort name already exists')
  })
})
