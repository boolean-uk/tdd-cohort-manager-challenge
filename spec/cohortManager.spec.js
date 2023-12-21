import CohortManager from '../src/cohortManager.js'

describe('CohortManager', () => {
  let cohort

  beforeEach(() => {
    cohort = new CohortManager()
  })
  it('should create a cohort with a given name', () => {
    const cohortName = 'cohort-1'

    const result = cohort.createCohort(cohortName)

    expect(result.name).toBe(cohortName)
    expect(result.students).toEqual([])
  })

  it('should throw an error if cohort name is not unique', () => {
    const cohortName = 'cohort-11'

    cohort.createCohort(cohortName)
    expect(() => {
      cohort.createCohort(cohortName)
    }).toThrowError('Cohort name already exists')
  })
  it('should find a cohort with a given name', () => {
    const cohortName = 'cohort-1'

    cohort.createCohort(cohortName)
    const result = cohort.findCohort(cohortName)
    expect(result.name).toBe(cohortName)
    expect(result.students).toEqual([])
  })

  it('should throw an error if cohort does not exist', () => {
    const cohortName = 'cohort-11'
    cohort.createCohort(cohortName)

    const result = 'cohort-34'
    expect(() => {
      cohort.findCohort(result)
    }).toThrowError('Cohort does not exist')
  })
})
