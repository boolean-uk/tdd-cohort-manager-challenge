import Cohort from '../../src/cohort.js'

describe('Cohort Operations', () => {
  it('creates a cohort with a name', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const result = cohort.cohortList
    expect(result[0].name).toEqual(cohortName)
  })

  it('searches a cohort by name', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const foundCohort = cohort.searchCohortByName(cohortName)

    expect(foundCohort).toBeDefined()
    expect(foundCohort.name).toEqual(cohortName)
  })

  it('adds a student to a cohort', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const student = { studentID: 1, name: 'John Doe' }

    cohort.addStudentToCohort(student, cohortName)

    expect(cohort.studentList.length).toEqual(1)
    expect(cohort.studentList[0].name).toEqual('John Doe')
    expect(cohort.studentList[0].cohortID).toEqual(1)
  })

  it('removes a cohort by name', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    cohort.removeCohortByName(cohortName)

    expect(cohort.cohortList.length).toEqual(0)
  })

  it('handles removing a non-existent cohort', () => {
    const cohort = new Cohort()
    const nonExistentCohortName = 'Nonexistent Cohort'

    cohort.removeCohortByName(nonExistentCohortName)
  })

  it('removes a student from a cohort', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const student = { studentID: 1, name: 'John Doe' }

    cohort.addStudentToCohort(student, cohortName)

    cohort.removeStudentFromCohort(1, cohortName)

    expect(cohort.studentList.length).toEqual(0)
  })

  it('handles removing a non-existent student from a cohort', () => {
    const cohort = new Cohort()
    const cohortName = 'Cohort 1'
    cohort.createCohort(cohortName)

    const studentIDToRemove = 1

    cohort.removeStudentFromCohort(studentIDToRemove, cohortName)
  })

  it('handles removing a student from a non-existent cohort', () => {
    const cohort = new Cohort()
    const nonExistentCohortName = 'Nonexistent Cohort'
    const student = { studentID: 1, name: 'John Doe' }

    cohort.addStudentToCohort(student, nonExistentCohortName)

    cohort.removeStudentFromCohort(1, nonExistentCohortName)
  })
})
