const CohortManager = require("../src/cohortmanager.js")
const Student = require("../src/student")
const Cohort = require("../src/cohort")

describe("CohortManager",() =>{
  //Create  a cohort with a cohort name Requirement 1
  it('Create a cohort with a name', () =>{
    //set up
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')

    //execute
    const result = cohortManager.createCohort(cohort)

    //verify
    expect(result).toEqual('Cohort 1')
  })

  //Search for a cohort by cohort name 

  it('Search for a cohort by a cohort name', () => {
    //set up 
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')

    cohortManager.createCohort(cohort)

    const result = cohortManager.searchCohort('Cohort 1')
    expect(result).toEqual(cohort)
  })

  // Cohort does not exist
  it('Search for a cohort Name that does not exist', () => {
    //set up 
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')

    cohortManager.createCohort(cohort)

    const result = cohortManager.searchCohort('Cohort 3')
    expect(result).toEqual("Cohort doesn't exist")
  })

  //Add student to a specific cohort requirement 3
  it('Add student to a specific cohort',() => {
    //set up
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')
    cohortManager.createCohort(cohort)
    const student = {
      id: 1,
      firstName: 'Sean',
      lastName: 'Richards',
      github: 'seanrichhh',
      email: 'sean@outlook.com'
    }
    //execute
    const result = cohortManager.addStudentToCohort('Cohort 1', student)
    expect(result).toEqual(student)
    expect(cohort.students).toEqual([student])

  })
  // Remove a cohort by cohort name requirement 4
  it('Remove cohort by name', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')
    const expected =[cohort]
    
    cohortManager.createCohort(cohort)

    const result = cohortManager.removeCohortName('Cohort 1')

    expect(result).toEqual(expected)
    expect(cohortManager.cohorts).toEqual([])

  })
// Requirement 5 remove a student from a specific cohort
  it('remove a student from a specific cohort', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')

    cohortManager.createCohort(cohort)

    const student = {
      id: 1,
      firstName: 'Sean',
      lastName: 'Richards',
      github: 'seanrichhh',
      email: 'sean@outlook.com'
    }
    const expected = [student]

    cohortManager.addStudentToCohort('Cohort 1', student)

    const result = cohortManager.removeStudentFromCohort(cohort.name, student)
    
    expect(result).toEqual(expected)
    expect(cohort.students).toEqual([])

  })


})