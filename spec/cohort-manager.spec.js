const Student = require('../src/student.js')
const CohortManager = require('../src/cohort-manager.js')
const Cohort = require('../src/cohort.js')

describe('Cohort', () => {
  it('Create a Cohort with a Cohort Name', () => {
    // set up
    const cohortManager = new CohortManager()

    const cohort = new Cohort('Cohort 1')
    // execute
    // verify
    const result = cohortManager.createCohorts(cohort)
    expect(result).toEqual('Cohort 1')
  })

  it('Search returns a cohort if it exists', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')

    cohortManager.createCohorts(cohort)
    // execute
    // verify
    const foundCohort = cohortManager.searchForCohort('Cohort 1')
    expect(foundCohort).toEqual(cohort)
  })

  it("Search returns false if cohort doesn't exist", () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 2')

    cohortManager.createCohorts(cohort)
    // execute
    //vefity
    const cohortNotFound = cohortManager.searchForCohort('Cohort 1')
    expect(cohortNotFound).toEqual(false)
  })

  it('Remove Cohort name', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')
    const expected = [cohort]

    cohortManager.createCohorts(cohort)
    // execute
    //vefity
    const removedCohort = cohortManager.removeCohort('Cohort 1')
    expect(removedCohort).toEqual(expected)
    expect(cohortManager.cohorts).toEqual([])
  })

  it("Remove Cohort that doesn't exist", () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')
    const expected = []

    cohortManager.createCohorts(cohort)
    // execute
    //vefity
    console.log(cohort)
    const removedCohort = cohortManager.removeCohort('Cohort 2')
    expect(removedCohort).toEqual(expected)
  })

  it('Add a Student to a Cohort with name & Student details', () => {
    // set up
    const cohortManager = new CohortManager()

    const cohort = new Cohort('Cohort 1')
    cohortManager.createCohorts(cohort)
    const student = {
      name: 'Billy Potts',
      email: 'billypotts@gmail.com'
    }
    // execute
    // verify
    const result = cohortManager.addStudent('Cohort 1', student)
    expect(result).toEqual(student)
    expect(cohort.students).toEqual([student])
  })

  it('Remove Student from a cohort', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')
    cohortManager.createCohorts(cohort)
    const student = {
      name: 'Billy Potts',
      email: 'billypotts@gmail.com'
    }
    const expected = [student]

    cohortManager.addStudent(cohort.name, student)
    // execute
    //vefity
    const removedStudent = cohortManager.removeStudent(cohort.name, student)
    expect(removedStudent).toEqual(expected)
    expect(cohort.students).toEqual([])
  })

  it('Remove Student that does not exist', () => {
    const cohortManager = new CohortManager()
    const cohort = new Cohort('Cohort 1')
    cohortManager.createCohorts(cohort)
    const student = {
      name: 'Billy Potts',
      email: 'billypotts@gmail.com'
    }
    const nonExistingStudent = {
      name: 'Guy Moore',
      email: 'guymoore@gmail.com'
    }

    const expected = []

    cohortManager.addStudent(cohort.name, student)
    // execute
    //vefity
    const removedStudent = cohortManager.removeStudent(
      cohort.name,
      nonExistingStudent
    )
    expect(removedStudent).toEqual(expected)
  })
})
