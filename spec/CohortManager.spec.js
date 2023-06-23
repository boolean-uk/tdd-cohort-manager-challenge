const CohortManager = require('../src/CohortManager.js')

describe('cohort-Manager', () => {
  let td
  beforeEach(() => {
    td = new CohortManager()
    td = new CohortManager()
  })
  it('create cohort', () => {
    // Setup
    const expected = {
      cohortName: 'cohort 1',
      students: []
    }
    // execute
    const result = td.createCohort('cohort 1')
    // verify
    expect(result).toEqual(expected)
  })
  it('get cohort by name', () => {
    // Setup
    const cohort1 = td.createCohort('cohort 1')
    const cohort2 = td.createCohort('cohort 2')
    console.log("td",td );
    // execute
    const result = td.getCohortByName('cohort 2')
    // verify
    expect(result).toEqual(cohort2)
  })
  it('return undefined for non-existent name', () => {
    // Setup
    td.createCohort('cohort 1')
    td.createCohort('cohort 2')

    // Execute
    const result = td.getCohortByName('non-existent name')

    // Verify
    expect(result).toBeUndefined()
  })
  it('should add a student to a cohort', () => {
    // Setup
    const student = {
      name: 'John Doe',
      age: 20
    }
    const cohort = td.createCohort('cohort 1')

    // Execute
    td.addStudentToCohort(student, cohort.cohortName)

    // Verify
    expect(cohort.students).toContain(student)
  })
  it('should remove student to a cohort', () =>{
    //Setup
    const cohort1 = {
      cohortName: 'cohort 1',
      students: []
    }
    const cohort2 = {
      cohortName: 'cohort 1',
      students: []
    }
    //Execute
    // td.
    //Verify
  })
})
