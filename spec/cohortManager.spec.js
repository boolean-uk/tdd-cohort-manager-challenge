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
    // Given
    const cohort = 'Cohort 12'

    // Execute
    cohortManager.create('Cohort 7')
    cohortManager.create('Cohort 8')
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')

    // verify
    expect(() => cohortManager.searchCohort(cohort)).toThrowError(
      "The cohort doesn't exist"
    )
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

    // Verify
    expect(() =>
      cohortManager.addStudent(
        'Carlo',
        'Cùdegà',
        'charles101',
        'milanosushi@hotmail.it',
        'Cohort 12'
      )
    ).toThrowError("The cohort doesn't exist")
  })

  // Test 6
  it('Removes the cohort from the array, if the cohort exisists', () => {
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
        cohortName: 'Cohort 11',
        students: []
      }
    ]

    // Execute
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    cohortManager.create('Cohort 11')
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
    const result = cohortManager.removeCohort('Cohort 10')

    // Verify
    expect(result).toEqual(expected)
  })

  // Test 7
  it('Will throw an error if the cohort trying to be removed does not exist', () => {
    // Set up
    const cohort = 'Cohort 20'

    // Execute
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    cohortManager.create('Cohort 11')
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

    // verify
    expect(() => cohortManager.removeCohort(cohort)).toThrowError(
      "The cohort doesn't exist"
    )
  })

  // Test 8
  it('Searches for  student for a specific cohort and returns the student data, if the student exists', () => {
    // Set up
    const expected = {
      firstName: 'Alexandra',
      lastName: "O'neil",
      githubUsername: 'zandOneil4',
      email: 'AlexOneil@gmail.com',
      id: 211
    }

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
    const result = cohortManager.searchStudent('Alexandra', "O'neil")

    // Verify
    expect(result).toEqual(expected)
  })

  // Test 9
  it('Throws an error if the student that is being searched does not exist', () => {
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

    // Verify
    expect(() => cohortManager.searchStudent('Carlo', 'Cùdegà')).toThrowError(
      "The student doesn't exist"
    )
  })

  // Test 10
  it('Removes the student from a specified cohort, if the student exists', () => {
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
        students: []
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
    cohortManager.addStudent(
      'Billy',
      'Sanders',
      'billysanders101',
      'billysanders101@gmail.com',
      'Cohort 9'
    )
    const result = cohortManager.removeStudent('Alexandra', "O'neil")

    // Verify
    expect(result).toEqual(expected)
  })

  // Test 11
  it('Throws an error if the student that is being removed does not exist', () => {
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

    // Verify
    expect(() => cohortManager.removeStudent('Carlo', 'Cùdegà')).toThrowError(
      "The student doesn't exist"
    )
  })
})
