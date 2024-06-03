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

  it('should search for a cohort', () => {
    cohortManager.createCohort('Cohort 12')

    expect(cohortManager.searchCohort('Cohort 12')).toEqual(
      new Cohort(1, 'Cohort 12')
    )
  })

  it('should add student to a cohort', () => {
    cohortManager.createCohort('Cohort 12')

    expect(
      cohortManager.addStudent(
        'Leonardo',
        'Lodi',
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com',
        1
      )
    ).toEqual(
      new Cohort(1, 'Cohort 12', {
        firstName: 'Leonardo',
        lastName: 'Lodi',
        gitHubUsername: 'LeonardoSaraceli',
        email: 'leonardolodi09@gmail.com',
        cohortID: 1
      })
    )
  })
})
