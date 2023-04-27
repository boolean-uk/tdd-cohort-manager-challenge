const CohortManager = require('../cohort')

describe('Cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager([], [])
  })

  it('Create a cohort with name', () => {
    // SETUP
    const expected = [
      { cohortName: 'FrontEnd', students: [] },
      { cohortName: 'Backend', students: [] }
    ]

    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')
    const result = cohortManager.getCohorts()

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Removes a cohort', () => {
    // SETUP
    const expected = [{ cohortName: 'Backend', students: [] }]

    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')

    cohortManager.removeCohort('FrontEnd')
    const result = cohortManager.getCohorts()

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Remove a cohort that does not exist', () => {
    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')

    // This had to be made into a callback function for the error detection to work
    const result = () => cohortManager.removeCohort('BFullStack')

    // VERIFY
    expect(result).toThrowError('Cohort not found')
  })

  it('Searches for a cohort', () => {
    // SETUP
    const expected = { cohortName: 'Backend', students: [] }

    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')
    const result = cohortManager.searchCohort('Backend')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Searches for a cohort that does not exist', () => {
    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')
    const result = () => cohortManager.searchCohort('DataScience')

    // VERIFY
    expect(result).toThrowError('Cohort not found')
  })

  it('Adds a student to a cohort', () => {
    // SETUP
    const expected = {
      cohortName: 'Backend',
      students: [
        {
          studentID: 1,
          firstName: 'Asiye',
          lastName: 'Yurtkuran',
          gitHubUsername: 'Asiyeyurtkuran',
          email: 'asiyeyurtkuran@gmail.com'
        }
      ]
    }

    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')
    cohortManager.createCohort('FullStack')

    cohortManager.addStudentToCohort('Backend', 1)
    const result = cohortManager.searchCohort('Backend')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Removes a student from a cohort', () => {
    // SETUP
    const expected = {
      cohortName: 'Backend',
      students: [
        {
          studentID: 1,
          firstName: 'Asiye',
          lastName: 'Yurtkuran',
          gitHubUsername: 'Asiyeyurtkuran',
          email: 'asiyeyurtkuran@gmail.com'
        }
      ]
    }

    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')

    cohortManager.addStudentToCohort('Backend', 1)
    cohortManager.addStudentToCohort('Backend', 2)
    cohortManager.removeStudentFromCohort('Backend', 2)
    const result = cohortManager.searchCohort('Backend')

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Adding non-existent student to cohort', () => {
    // EXECUTE
    cohortManager.createCohort('FrontEnd')
    cohortManager.createCohort('Backend')
    cohortManager.createCohort('FullStack')

    cohortManager.addStudentToCohort('Backend', 1)
    const result = () => cohortManager.addStudentToCohort('Backend', 4)

    // VERIFY
    expect(result).toThrowError('Student not found')
  })
})
