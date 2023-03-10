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
    const cohort1 = new Cohort('cohort 1')
    const expected = [cohort1]
    // execute
    const result = cohortManager.createCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should create a student with a unique ID', () => {
    // setup
    const student1 = new Student('John', 'Deere')
    student1.id = 1
    const student2 = new Student('John', 'Doe')
    student2.id = 2
    const expected = 2
    // execute
    cohortManager.createStudent('John', 'Deere')
    cohortManager.createStudent('John', 'Doe')
    const result = cohortManager.students[1].id
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a cohort by name', () => {
    // setup
    const cohort2 = new Cohort('cohort 2')
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
    // const expected = `No cohort with this name`
    // execute
    // const result = cohortManager.findCohort('Cohort 3')
    // verify
    expect(() => {
      cohortManager.findCohort('Cohort 3')
    }).toThrow(new Error(`No cohort with this name`))
  })

  it('Should add a student to a specific cohort', () => {
    // setup
    const cohort1 = new Cohort('cohort 1')
    const student1 = new Student('John', 'Doe')
    student1.id = 1
    student1.cohort = 'cohort 1'
    cohort1.students.push(student1)
    const expected = cohort1
    cohortManager.createCohort('Cohort 1')
    cohortManager.createStudent('John', 'Doe')
    // execute
    const result = cohortManager.addStudentToCohort(student1.id, cohort1.name)
    // verify
    expect(result).toEqual(expected)
  })

  it('Should throw an error when no student with that ID is added to a cohort', () => {
    // setup
    cohortManager.createCohort('Cohort 1')

    // execut & verify
    expect(() => {
      cohortManager.addStudentToCohort(12, cohortManager.cohorts[0].name)
    }).toThrow(new Error('No student with this ID'))
  })

  it('Should remove a cohort by name', () => {
    // setup
    const cohort1 = new Cohort('cohort 1')
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
    // setup, execute & verify
    expect(() => {
      cohortManager.removeCohort('Cothort 2')
    }).toThrow(new Error('No cohort with this name'))
  })

  it('Should search for a student by student ID', () => {
    // setup
    const student1 = new Student('Flint', 'Lockwood')
    student1.id = 1
    const expected = student1
    cohortManager.createStudent('Flint', 'Lockwood')
    // execute
    const result = cohortManager.findStudent(1)
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a student by student ID, throw error if no student found', () => {
    // setup execute and verify
    expect(() => {
      cohortManager.findStudent(1)
    }).toThrow(new Error('No student with this ID'))
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
    // execute & verify
    expect(() => {
      cohortManager.addStudentToCohort(1, 'cohort 1')
    }).toThrow(
      new Error(
        `Unable to add more students to cohort 1. It currently has 24/24 students`
      )
    )
  })

  it('Should not be able to create a cohort without a name', () => {
    // Setup, Execute AND Verify, all in one handy block.
    expect(() => {
      cohortManager.createCohort('')
    }).toThrow(new Error('To create a cohort, it must have a name'))
  })

  it('Should not be able to create cohorts with the same name', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    // excute & verify
    expect(() => {
      cohortManager.createCohort('Cohort 1')
    }).toThrow(new Error('Cohorts can not have the same name'))
  })

  it('Should not be able to assign a student to more than 1 cohort', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.createStudent('Tiger', 'The Great')
    cohortManager.addStudentToCohort(1, 'Cohort 1')
    // execute & verify
    expect(() => {
      cohortManager.addStudentToCohort(1, 'Cohort 2')
    }).toThrow(new Error("Student's can only be in 1 cohort"))
  })

  it('Should find all students matching a first or last name', () => {
    // setup
    const student1 = new Student('John', 'Deere')
    const student2 = new Student('John', 'Doe')
    const student3 = new Student('Tom', 'Johnson')
    student1.id = 1
    student2.id = 2
    student3.id = 3
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
