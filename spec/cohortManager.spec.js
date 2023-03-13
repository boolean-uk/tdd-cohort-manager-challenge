const CohortManager = require('../src/cohortManager')
const students = require('../src/students')

describe('Cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager([], [])
  })

  it('Create a cohort with name', () => {
    // SETUP
    const expected = [
      { cohortName: 'Apple', students: [] },
      { cohortName: 'Pear', students: [] }
    ]

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = cohortManager.getCohorts()

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Removes a cohort', () => {
    // SETUP
    const expected = [{ cohortName: 'Pear', students: [] }]

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')

    cohortManager.removeCohort('Apple')
    const result = cohortManager.getCohorts()

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Remove a cohort that does not exist', () => {
    // SETUP
    const expected = null

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = cohortManager.removeCohort('Banana')

    // VERIFY
    expect(result).toEqual(expected)
  })

  /* it('Searches for a cohort', () => {
    // SETUP
    const expected = [{ cohortName: 'Pear', students: [] }]

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = cohortManager.searchForCohort('Pear')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Searches for a cohort that does not exist', () => {
    // SETUP
    const expected = null

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = cohortManager.searchForCohort('Orange')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Adds a student to a cohort', () => {
    // SETUP
    const studentId = students[1].id
    const expected = [
      {
        cohortName: 'Pear',
        students: [
          {
            studentID: 1,
            firstName: 'Peter',
            lastName: 'Smith',
            gitHubUsername: 'P-Smith',
            email: 'peter-smith@email.com'
          }
        ]
      }
    ]

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    cohortManager.createCohort('Banana')

    cohortManager.addStudentToCohort('Pear', studentId)
    const result = cohortManager.searchForCohort('Pear')
    console.log('OVER HERE ---->', result)
    // const result = cohortManager.getStudents()

    // VERIFY
    expect(result).toEqual(expected)
  }) */
})
