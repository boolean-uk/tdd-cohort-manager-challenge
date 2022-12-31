const CohortManager = require('../src/CohortManager.js')
const Cohort = require('../src/Cohort.js')
// const Student = require('../src/Student.js')
// const Student = require('..src/Student.js')
describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('can create a cohort with a cohort name', () => {
    const expected = new Cohort('Cohort1')
    const result = cohortManager.createCohort('Cohort1')
    expect(result).toEqual([expected])
  })
  it('can search for a cohort by a cohort name', () => {
    const expected = new Cohort('Cohort1')
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    const result = cohortManager.searchCohort('Cohort1')
    expect(result).toEqual(expected)
  })
  it('return error if the cohort does not exist', () => {
    const expected = 'Error : No cohort found!'
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    const result = cohortManager.searchCohort('Cohort5')
    expect(result).toEqual(expected)
  })
  it('removes a cohort from the list by its name', () => {
    const expected = 'This cohort has been removed: Cohort 1'
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const result = cohortManager.removeCohort('Cohort 1')
    expect(result).toEqual(expected)
  })

  it('throws error if cohort does not exist', () => {
    const expected = 'Error: Cohort does not exist'
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('cohort 2')
    const result = cohortManager.removeCohort('Cohort 60')
    expect(result).toEqual(expected)
  })

  it(' adds a student to a specific cohort', () => {
    const student = {
      studentID: 1,
      firstName: 'Abul',
      lastName: 'Kibria',
      githubUser: 'akibria',
      email: 'ahkibria@hotmail.co.uk'
    }
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    cohortManager.addStudentToCohort('Cohort2', student)
    const cohort1 = cohortManager.searchCohort('Cohort1')
    const cohort2 = cohortManager.searchCohort('Cohort2')
    expect(cohort1.studentList.length).toEqual(0)
    expect(cohort2.studentList.length).toEqual(1)
  })
  it('remove a student from a specific cohort by ID', () => {
    const expected = `Student ID 1 has been removed from cohort`
    const student = {
      studentID: 1,
      firstName: 'Abul',
      lastName: 'Kibria',
      githubUser: 'akibria',
      email: 'ahkibria@hotmail.co.uk'
    }
    cohortManager.createCohort('Cohort1')
    cohortManager.addStudentToCohort('Cohort1', student)
    const result = cohortManager.removeStudent('Cohort1', 1)
    expect(result).toEqual(expected)
  })
  it(' return error for removing non existing student', () => {
    const expected = 'student not found'
    const student = {
      studentID: 1,
      firstName: 'Abul',
      lastName: 'Kibria',
      githubUser: 'akibria',
      email: 'ahkibria@hotmail.co.uk'
    }
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    cohortManager.addStudentToCohort('Cohort2', student)
    const result = cohortManager.removeStudent('Cohort2', 2)
    expect(result).toEqual(expected)
  })
})
