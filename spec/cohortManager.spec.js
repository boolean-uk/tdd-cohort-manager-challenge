const CohortManager = require('../src/cohortManager.js')

describe('cohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  // Test 1
  it('creates a cohort', () => {
    // Set up
    const expected = [
      {
        cohortName: 'Cohort 9',
        students: []
      },
      {
        cohortName: 'Cohort 10',
        students: []
      }
    ]
    // Execute
    cohortManager.create('Cohort 9')
    const result = cohortManager.create('Cohort 10')
    // Verify
    expect(result).toEqual(expected)
  })

  // Test 2
  it('returns the cohort data, if it exists', () => {
    // Set up
    const expected = {
      cohortName: 'Cohort 8',
      students: []
    }

    // Execute
    cohortManager.create('Cohort 7')
    cohortManager.create('Cohort 8')
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    const result = cohortManager.searchCohort('Cohort 8')

    // Verify
    expect(result).toEqual(expected)
  })

  // Test 3
  it('Throws error message if the cohort being serached does not exist', () => {
    // Set up
    const expected = "The cohort doesn't exist"

    // Execute
    cohortManager.create('Cohort 7')
    cohortManager.create('Cohort 8')
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    const result = cohortManager.searchCohort('Cohort 12')

    // verify
    expect(result).toEqual(expected)
  })

  // Test 4
  it("Adds students to cohort's", () => {
    // Set up
    const expected = [
      {
        cohortName: 'Cohort 9',
        students: [
          {
            firstName: 'Kyle',
            lastName: 'Bridgewater',
            githubUsername: 'kyleUnderwater',
            email: 'kylebridge@yahoo.com',
            id: 111
          },
          {
            firstName: 'Billy',
            lastName: 'Sanders',
            githubUsername: 'billysanders101',
            email: 'billysanders101@gmail.com',
            id: 112
          }
        ]
      },
      {
        cohortName: 'Cohort 10',
        students: [
          {
            firstName: 'Alexandra',
            lastName: "O'neil",
            githubUsername: 'zandOneil4',
            email: 'AlexOneil@gmail.com',
            id: 211
          }
        ]
      }
    ]

    // Execute
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    cohortManager.addStudent(
      'Kyle',
      'Bridgewater',
      'kyleUnderwater',
      'kylebridge@yahoo.com',
      'Cohort 9'
    )
    cohortManager.addStudent(
      'Alexandra',
      "O'neil",
      'zandOneil4',
      'AlexOneil@gmail.com',
      'Cohort 10'
    )
    const result = cohortManager.addStudent(
      'Billy',
      'Sanders',
      'billysanders101',
      'billysanders101@gmail.com',
      'Cohort 9'
    )

    // Verify
    expect(result).toEqual(expected)
  })

  // Test 5
  it('Will throw an error message if the cohort that the student is being added to does not exist', () => {
    // Set up
    const expected = "The cohort doesn't exist"

    // Execute
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    cohortManager.addStudent(
      'Kyle',
      'Bridgewater',
      'kyleUnderwater',
      'kylebridge@yahoo.com',
      'Cohort 9'
    )
    cohortManager.addStudent(
      'Alexandra',
      "O'neil",
      'zandOneil4',
      'AlexOneil@gmail.com',
      'Cohort 10'
    )
    cohortManager.addStudent(
      'Billy',
      'Sanders',
      'billysanders101',
      'billysanders101@gmail.com',
      'Cohort 9'
    )
    const result = cohortManager.addStudent(
      'Carlo',
      'Cùdegà',
      'charles101',
      'milanosushi@hotmail.it',
      'Cohort 12'
    )

    // Verify
    expect(result).toEqual(expected)
  })
})
