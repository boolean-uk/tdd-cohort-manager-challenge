import CohortManager from '../src/cohortManager.js'

describe('Cohort Manager:', () => {
  let cohort

  beforeEach(() => {
    cohort = new CohortManager()
  })

  it('create cohort with cohort name', () => {
    const expected = {
      name: 'Cohort-1',
      students: []
    }

    const result = cohort.createCohort('Cohort-1')

    expect(result).toEqual(expected)
  })

  it("shouldn't create a cohort with same name as any other cohort", () => {
    const expected = 'Cohort-1 already exists'
    cohort.createCohort('Cohort-1')
    const result = cohort.createCohort('Cohort-1')

    expect(result).toEqual(expected)
  })
})
