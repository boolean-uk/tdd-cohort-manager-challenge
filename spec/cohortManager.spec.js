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
    student1.cohort = 'Cohort 1'
    cohort1.students.push(student1)
    const expected = cohort1
    cohortManager.createCohort('Cohort 1')
    cohortManager.createStudent('John', 'Doe')
    // execute
    const result = cohortManager.addStudentToCohort(1, 'Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should remove a cohort by name', () => {
    // setup
    const cohort1 = new Cohort('Cohort 1')
    const expected = [cohort1]
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cothort 2')
    // execute
    cohortManager.removeCohort('Cothort 2')
    const result = cohortManager.cohorts
    // verify
    expect(result).toEqual(expected)
  })

  it('Should remove a cohort by name, but return error if no cohort found', () => {
    // setup
    const expected = 'No cohort with this name'
    // execute
    const result = cohortManager.removeCohort('Cothort 2')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a student by student ID', () => {
    // setup
    const student1 = new Student('Flint', 'Lockwood')
    student1.studentId = 1
    const expected = student1
    cohortManager.createStudent('Flint', 'Lockwood')
    // execute
    const result = cohortManager.findStudent(1)
    // verify
    expect(result).toEqual(expected)
  })

  it('Should not be able to add students to a cohort that is at capacity', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createStudent('Michael', 'Jordan')
    // Making Cohort 1 have a .length of 24. To mimic a full cohort.
    cohortManager.cohorts[0].students = Array.from(
      { length: 24 },
      (_, i) => i + 1
    )
    const expected = `Unable to add more students to Cohort 1. It currently has 24/24 students`
    // execute
    const result = cohortManager.addStudentToCohort(1, 'Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should not be able to create a cohort without a name', () => {
    // setup
    const expected = 'To create a cohort, it must have a name'
    // execute
    const result = cohortManager.createCohort('')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should not be able to create cohorts with the same name', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    const expected = 'Cohorts can not have the same name'
    // execute
    const result = cohortManager.createCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should not be able to assign a student to more than 1 cohort', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.createStudent('Tiger', 'The Great')
    cohortManager.addStudentToCohort(1, 'Cohort 1')
    const expected = "Student's can only be in 1 cohort"
    // execute
    const result = cohortManager.addStudentToCohort(1, 'Cohort 2')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should find all students matching a first or last name', () => {
    // setup
    const student1 = new Student('John', 'Deere')
    const student2 = new Student('John', 'Doe')
    const student3 = new Student('Tom', 'Johnson')
    student1.studentId = 1
    student2.studentId = 2
    student3.studentId = 3
    const expected = [student1, student2, student3]
    cohortManager.createStudent('John', 'Deere')
    cohortManager.createStudent('John', 'Doe')
    cohortManager.createStudent('Tom', 'Johnson')
    // execute
    const result = cohortManager.findStudentByName('John')
    // verify
    expect(result).toEqual(expected)
  })
})

describe('Cohort', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should remove student by ID', () => {
    // setup
    const cohort1 = new Cohort('Cohort 1')
    const student1 = new Student('John', 'Doe')
    student1.studentId = 1
    student1.cohort = 'Cohort 1'
    cohort1.students.push(student1)
    const expected = cohort1
    cohortManager.createCohort('Cohort 1')
    cohortManager.createStudent('John', 'Doe')
    cohortManager.createStudent('Jane', 'Doe')
    cohortManager.addStudentToCohort(1, 'Cohort 1')
    cohortManager.addStudentToCohort(2, 'Cohort 1')

    // execute
    cohortManager.cohorts[0].removeStudent(2)
    const result = cohortManager.cohorts[0]
    // verify
    expect(result).toEqual(expected)
  })

  it(' Should remove student by ID, but return error if no student found', () => {
    // setup
    const expected = 'No student with this ID'
    cohortManager.createCohort('Cohort 1')
    // execute
    const result = cohortManager.cohorts[0].removeStudent(2)
    // verify
    expect(result).toEqual(expected)
  })
})
