const CohortList = require('../src/cohortManager.js')

describe('Contains all Cohorts', () => {
  // beforeEach(() => {})
  it('Creates a new cohort with a name', () => {
    // GIVEN
    const cohorts = {
      cohortName: 'Cohort1',
      students: []
    }
    // WHEN
    const cohort = new CohortList()
    const newCohort = cohort.createCohort()
    // THEN
    expect(newCohort).toEqual(cohorts)
  })
  // it('Adds student to a cohort', () => {
  //   const cohort = [
  //     {
  //       studentID: 1,
  //       firstname: 'Isa',
  //       lastname: 'Tartarelli',
  //       githubusername: 'Shylan21',
  //       email: 'isabel.tartarelli@live.it'
  //     }
  //   ]
  // })
})
