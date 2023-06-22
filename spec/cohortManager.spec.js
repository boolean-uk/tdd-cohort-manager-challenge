const CohortManager = require('../src/cohortManager')

describe('Cohorts', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('Returns True when a cohort is successfully created', () => {
    // setup
    const cohortName = 'Cohort 1'
    // execute
    const res = cohortManager.addCohort(cohortName)
    // verify
    expect(res).toEqual(true)
  })

  it('Returns the Cohort Data of a searched cohort', () => {
    // setup
    const cohortName = 'Cohort 1'
    cohortManager.addCohort(cohortName)
    // execute
    const res = cohortManager.searchCohort(cohortName)
    // verify
    expect(res).toEqual(true)
  })

  // unhappy path
  it('Returns the Cohort Does not exist when an invalid Cohort is inputted into the search', () => {
    // setup
    const cohortName = 'Cohort 1'
    const invalidCohortName = 'Cohort 992'
    cohortManager.addCohort(cohortName)
    // execute
    const res = cohortManager.searchCohort(invalidCohortName)
    // verify
    expect(res).toEqual(false)
  })

  it('Adds student to a chosen cohort', () => {
    // setup
    const cohortName = 'Cohort 1'
    const studentInfo = {
      studentId: 1,
      firstName: 'John',
      lastName: 'Terry',
      githubUser: 'JT26',
      email: 'jt@hotmail.com'
    }
    cohortManager.addCohort(cohortName)
    // execute
    const res = cohortManager.addStudent(cohortName, studentInfo)
    // verify
    expect(res).toEqual(true)
  })

  // happy path
  it('Deletes selected cohort', () => {
    // setup
    const cohortName = 'Cohort 1'
    cohortManager.addCohort(cohortName)
    // execute
    const res = cohortManager.removeCohort(cohortName)
    // verify
    expect(res).toEqual(true)
  })

  // unhappy path
  it('Returns Error when user attempts to Delete a cohort that does not exist', () => {
    // setup
    const cohortName = 'Cohort 54'
    cohortManager.addCohort('Cohort 1')
    // execute
    const res = cohortManager.removeCohort(cohortName)
    // verify
    expect(res).toEqual(false)
  })

  // happy path
  it('Remove Student from Selected Cohort', () => {
    // setup
    // execute
    // verify
  })

  // unhappy path
  it('Returns Error to user when Student is not found', () => {
    // setup
    // execute
    // verify
  })
})
