import CohortManager from '../src/CohortManager.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should be empty on initialization', function () {
    expect(cohortManager.cohorts.length).toEqual(0)
  })

  it('Should have a new cohort with name', function () {
    cohortManager.addCohort('New cohort')
    cohortManager.addCohort('Second cohort')
    expect(cohortManager.cohorts).toEqual([
      {
        name: 'New cohort',
        students: []
      },
      {
        name: 'Second cohort',
        students: []
      }
    ])
  })

  it('Should return when existing', function () {
    cohortManager.addCohort('New cohort')
    cohortManager.addCohort('Second cohort')
    expect(cohortManager.searchCohort('Second cohort')).toEqual({
      name: 'Second cohort',
      students: []
    })
  })

  it('Should not return when not existing', function () {
    cohortManager.addCohort('New cohort')
    expect(cohortManager.searchCohort('Second cohort')).toEqual(undefined)
  })

  it('Should add student', function () {
    cohortManager.addCohort('New cohort')
    cohortManager.addStudent('New cohort', {
      id: 1,
      firstName: 'Kristian',
      lastName: 'Verduin',
      github: 'kristianverdiun',
      email: 'kristian@mail.com'
    })
    expect(cohortManager.searchCohort('New cohort')).toEqual({
      name: 'New cohort',
      students: [
        {
          id: 1,
          firstName: 'Kristian',
          lastName: 'Verduin',
          github: 'kristianverdiun',
          email: 'kristian@mail.com'
        }
      ]
    })
  })

  it('Cohort should be removed', function () {
    cohortManager.addCohort('New cohort')
    cohortManager.removeCohort('New cohort')
    expect(cohortManager.cohorts.length).toEqual(0)
  })

  it('Should Remove student', function () {
    cohortManager.addCohort('New cohort')
    cohortManager.addStudent('New cohort', {
      id: 1,
      firstName: 'Kristian',
      lastName: 'Verduin',
      github: 'kristianverdiun',
      email: 'kristian@mail.com'
    })
    cohortManager.removeStudent('New cohort', 1)
    expect(cohortManager.searchCohort('New cohort')).toEqual({
      name: 'New cohort',
      students: []
    })
  })
})
