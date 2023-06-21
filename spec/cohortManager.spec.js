// import CohortManager from '../src/cohortManager.js'
const CohortManager = require('../src/cohortManager.js')

describe('Cohort Manager Application', () => {
  let cmanager

  beforeEach(() => {
    cmanager = new CohortManager()
  })

  it('should create a new cohort', () => {
    // GIVEN
    const newCohort = { cohortName: 'Cohort 1', students: [] }
    // WHEN
    const createCohort = cmanager.createNewCohort('Cohort 1')
    // THEN
    expect(createCohort).toEqual(newCohort)
  })

  it('should search cohort by cohort name', () => {
    // GIVEN
    const cohortName = 'Cohort 1'
    // WHEN
    cmanager.createNewCohort('Cohort 1')
    const searchResult = cmanager.searchCohortByName(cohortName)
    // THEN
    expect(searchResult).toEqual({ cohortName: 'Cohort 1', students: [] })
  })

  it('should add student to a cohort', () => {
    // GIVEN
    // const student = {
    //   studentID: 1,
    //   firstname: 'a',
    //   lastname: 'b',
    //   gitusername: '@gitadesokan',
    //   email: 'ade@gmail.com'
    // }
    // WHEN
    // THEN
  })
})
