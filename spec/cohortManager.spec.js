// import { describe, beforeEach, it, expect } from 'jasmine'

const CohortManager = require('../src/cohortManager')
// const Cohort = require('../src/cohort')

describe('CohortManager:', () => {
  let cohortmanager

  beforeEach(() => {
    cohortmanager = new CohortManager()
  })

  it('creates a cohort', () => {
    // set up
    const expected = { cohortName: 'Cohort 1', students: [] }
    // execute
    const result = cohortmanager.createCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('search for a cohort', () => {
    // set up
    const expected = { cohortName: 'Cohort 1', students: [] }
    // execute
    cohortmanager.createCohort('Cohort 1')
    cohortmanager.createCohort('Cohort 2')
    cohortmanager.createCohort('Cohort 3')
    cohortmanager.createCohort('Cohort 4')
    const result = cohortmanager.searchCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('remove a cohort', () => {
    // set up
    const expected = 'This cohort has been removed: Cohort 1'
    // execute
    cohortmanager.createCohort('Cohort 1')
    cohortmanager.createCohort('Cohort 2')
    cohortmanager.createCohort('Cohort 3')
    cohortmanager.createCohort('Cohort 4')
    const result = cohortmanager.removeCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('add student to a specific cohort', () => {
    // set up
    // Create student variable so that we can add it to the cohort
    const student = {
      studentID: 1,
      firstName: 'Tom',
      lastName: 'Sparrow',
      githubUserName: 'tomsparrow123',
      email: 'tomsparrow123@gmail.com'

    }
    // Create cohort 1
    cohortmanager.createCohort('Cohort 1')
    // Create cohort 2
    cohortmanager.createCohort('Cohort 2')
    // execute
    // call the method: addStudentToCohort
    cohortmanager.addStudentToCohort('Cohort 1', student)
    // verify
    // Get cohort 1 using the method: search cohort
    const cohort1 = cohortmanager.searchCohort('Cohort 1')
    // Get cohort 2 using the method: search cohort
    const cohort2 = cohortmanager.searchCohort('Cohort 2')
    // Cohort 1 student's array should have 1 element
    expect(cohort1.students.length).toEqual(1)
    // Cohort 2 student's ar/ray should have 0 element
    expect(cohort2.students.length).toEqual(0)
  })

  it('find student in a cohort', () => {
    // set up
    const student = {
      studentID: 1,
      firstName: 'Tom',
      lastName: 'Sparrow',
      githubUserName: 'tomsparrow123',
      email: 'tomsparrow123@gmail.com'
    }
    cohortmanager.createCohort('Cohort 1')
    cohortmanager.addStudentToCohort('Cohort 1', student)
    // execute
    const result = cohortmanager.findStudent('Cohort 1', 1)
    // verify
    expect(result).toEqual(student)
  })

  it('remove a student from a cohort', () => {
    // set up
    const expected = 'Student removed 1'
    const student = {
      studentID: 1,
      firstName: 'Tom',
      lastName: 'Sparrow',
      githubUserName: 'tomsparrow123',
      email: 'tomsparrow123@gmail.com'
    }
    cohortmanager.createCohort('Cohort 1')
    cohortmanager.addStudentToCohort('Cohort 1', student)
    // execute
    const result = cohortmanager.removeStudent('Cohort 1', 1)
    // verify
    expect(result).toEqual(expected)
  })
})
