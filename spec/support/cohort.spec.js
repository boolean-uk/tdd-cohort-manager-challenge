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
})
