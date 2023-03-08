const { CohortManager, Cohort, Student } = require('./../src/cohortManager.js')

describe('cohortManager', () => {
  it('should pass', () => {
    expect(true).toEqual(true)
  })
})

describe('Cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should create a cohort with a name', () => {
    // setup
    const cohort1 = new Cohort('Cohort 1')
    const expected = [cohort1]
    // execute
    const result = cohortManager.createCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should create a student with a unique ID', () => {
    // setup
    const student1 = new Student('John', 'Deere')
    student1.studentId = 1
    const student2 = new Student('John', 'Doe')
    student2.studentId = 2
    const expected = 2
    // execute
    cohortManager.createStudent('John', 'Deere')
    cohortManager.createStudent('John', 'Doe')
    const result = cohortManager.students[1].studentId
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a cohort by name', () => {
    // setup
    const cohort2 = new Cohort('Cohort 2')
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const expected = cohort2
    // execute
    const result = cohortManager.findCohort('Cohort 2')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a cohort by name, but return an error if no cohort found', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const expected = `No cohort with this name`
    // execute
    const result = cohortManager.findCohort('Cohort 3')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should add a student to a specific cohort', () => {
    // setup
    const cohort1 = new Cohort('Cohort 1')
    const student1 = new Student('John', 'Doe')
    student1.studentId = 1
    cohort1.students.push(student1)
    const expected = cohort1
    // execute
    cohortManager.createCohort('Cohort 1')
    cohortManager.createStudent('John', 'Doe')
    const result = cohortManager.addStudentToCohort(1, 'Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })
})
