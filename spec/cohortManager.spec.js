const CohortManager = require('../src/cohortManager')

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
    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')

    // This had to be made into a callback function for the error detection to work
    const result = () => cohortManager.removeCohort('Banana')

    // VERIFY
    expect(result).toThrowError('Cohort not found')
  })

  it('Searches for a cohort', () => {
    // SETUP
    const expected = { cohortName: 'Pear', students: [] }

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = cohortManager.searchForCohort('Pear')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Searches for a cohort that does not exist', () => {
    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = () => cohortManager.searchForCohort('Orange')

    // VERIFY
    expect(result).toThrowError('Cohort not found')
  })

  it('Adds a student to a cohort', () => {
    // SETUP
    const expected = {
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

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    cohortManager.createCohort('Banana')

    cohortManager.addStudentToCohort('Pear', 1)
    const result = cohortManager.searchForCohort('Pear')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Removes a student from a cohort', () => {
    // SETUP
    const expected = {
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

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')

    cohortManager.addStudentToCohort('Pear', 1)
    cohortManager.addStudentToCohort('Pear', 2)
    cohortManager.removeStudentFromCohort('Pear', 2)
    const result = cohortManager.searchForCohort('Pear')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Adding non-existent student to cohort', () => {
    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    cohortManager.createCohort('Banana')

    cohortManager.addStudentToCohort('Pear', 1)
    const result = () => cohortManager.addStudentToCohort('Pear', 4)

    // VERIFY
    expect(result).toThrowError('Student not found')
  })
})
