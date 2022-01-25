const CohortManager = require('../src/cohort-manager.js')

describe('Cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  // Create a cohort with a cohort name
  it('Create a cohort with a name', () => {
    // setup
    const cohortName = 'Cohort Four'
    // execute
    cohortManager.createCohort(cohortName)
    // check
    // check cohort has been put on cohorts list
    expect(cohortManager.cohorts.length).toEqual(1)
    // if it has check if name is in the list
    expect(cohortManager.cohorts[0].cohortName).toEqual(cohortName)
  })

  // Search for a cohort by cohort cohortName
  it('Search for cohort by name', () => {
    // setup
    const expected = { cohortName: 'Cohort Five', students: [] }
    // execute
    cohortManager.createCohort('Cohort One')
    cohortManager.createCohort('Cohort Two')
    cohortManager.createCohort('Cohort Three')
    cohortManager.createCohort('Cohort Four')
    cohortManager.createCohort('Cohort Five')
    // cohortManager.searchCohorts("Cohort Five");
    // check
    // called inlining
    expect(cohortManager.searchCohorts('Cohort Five')).toEqual(expected)
  })

  // Add student to a specific cohort manager
  it('Add student to specific cohort', () => {
    // setup
    // const cohortName = "Cohort Four";
    // hardcode
    const expected = {
      id: 100,
      name: 'Michael',
      surname: 'Johnson',
      github: 'mj100',
      email: 'mj100@aol.net'
    }
    // execute
    cohortManager.createCohort('Cohort Four')
    cohortManager.createCohort('Cohort Five')

    const result = cohortManager.addStudent(
      'Cohort Four',
      100,
      'Michael',
      'Johnson',
      'mj100',
      'mj100@aol.net'
    )

    // cohortManager.[0].cohortName
    // check
    expect(result).toEqual(expected)

  })

  // Create a cohort with a cohort name
  it('Remove a cohort by cohort name', () => {
    // setup
    const expected = [{ cohortName: 'Cohort One', students: [  ] }, { cohortName: 'Cohort Three', students: [  ] }]
    // execute
    cohortManager.createCohort('Cohort One')
    cohortManager.createCohort('Cohort Two')
    cohortManager.createCohort('Cohort Three')
    // check
    const result = cohortManager.removeCohort('Cohort Two')

    expect(result).toEqual(expected)
  })

  it('Remove a student by id', () => {

    const expected = {
      cohortName: 'Cohort Four',
      students: [{
        id: 700,
        name: 'James',
        surname: 'Wheeler',
        github: 'jwheel7',
        email: 'jwheel7@provider.com'
      },
      {
        id: 900,
        name: firstName,
        surname: lastName,
        github: gitName,
        email: email
      }]
    }
  }
})

// The Cohort Manager should be able to support the following interactions

// - Create a cohort with a cohort name
// - Search for a cohort by cohort name
// - Add student to a specific cohort
// - Remove a cohort by cohort name
// - Remove student from a specific cohort
// - Return errors if student or cohort not found

// A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
