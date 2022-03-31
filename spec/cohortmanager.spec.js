const CohortManager = require('../src/cohortManager.js')
const Student = require('../src/student.js')

describe('Cohort Tests', () => {
  let cohortManager

  const student1 = new Student(
    1,
    'Toby',
    'Carlo',
    '0xtobycarlo',
    'tobycarlo.c@gmail.com'
  )

  const student2 = new Student(
    2,
    'User2',
    'Name2',
    'Username2',
    'sample2@gmail.com'
  )

  const student3 = new Student(
    3,
    'User3',
    'Name3',
    'Username3',
    'sample3@gmail.com'
  )

  const student4 = new Student(
    4,
    'User4',
    'Name4',
    'Username4',
    'sample4@gmail.com'
  )

  const student5 = new Student(
    5,
    'User5',
    'Name5',
    'Username5',
    'sample5@gmail.com'
  )

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Adding a student to a list', () => {
    // setup
    const expected = student1
    // execute
    cohortManager.createStudent(student1)
    const result = cohortManager.getStudentList()
    // verify
    expect(result).toEqual([expected])
  })

  it('Creates a new cohort', () => {
    // setup
    const expected = ['Cohort 5']
    // execute
    const result = cohortManager.createCohort('Cohort 5')
    // verify
    expect(result).toEqual(expected)
  })

  it('Adding multiple students', () => {
    // setup
    const expected = [student1, student2, student3]
    // execute
    cohortManager.createStudent(student1)
    cohortManager.createStudent(student2)
    cohortManager.createStudent(student3)
    const result = cohortManager.getStudentList()
    // verify
    expect(result).toEqual(expected)
  })

  it('Creating a cohort', () => {
    // setup
    const expected = {
      name: 'CohortFive',
      students: [],
      cohortCapacity: 24
    }
    // execute
    const result = cohortManager.createCohort('CohortFive')
    // verify
    expect(result).toEqual(expected)
  })

  it('Creating multiple cohorts', () => {
    // setup
    const expected = [
      {
        name: 'CohortFive',
        students: [],
        cohortCapacity: 24
      },
      {
        name: 'CohortSix',
        students: [],
        cohortCapacity: 24
      }
    ]
    cohortManager.createCohort('CohortFive')
    cohortManager.createCohort('CohortSix')
    // execute
    const result = cohortManager.getAllCohorts()
    // verify
    expect(result).toEqual(expected)
  })

  it("Search for a cohort by it's name", () => {
    // setup
    const expected = {
      name: 'CohortFive',
      students: [],
      cohortCapacity: 24
    }
    cohortManager.createCohort('CohortFive')
    cohortManager.createCohort('CohortSix')
    // execute
    const result = cohortManager.searchCohort('CohortFive')
    // verify
    expect(result).toEqual(expected)
  })

  it("Search for a cohort that doesn't exist", () => {
    // setup
    const expected = 'Cohort not found!'
    cohortManager.createCohort('CohortFive')
    // execute
    const result = cohortManager.searchCohort('CohortSeven')
    // verify
    expect(result).toEqual(expected)
  })

  it("Remove a cohort by it's name", () => {
    // setup
    const expected = [
      {
        name: 'CohortFive',
        students: [],
        cohortCapacity: 24
      }
    ]
    cohortManager.createCohort('CohortFive')
    cohortManager.createCohort('CohortSix')
    // execute
    cohortManager.removeCohort('CohortSix')
    const result = cohortManager.getAllCohorts()
    // verify
    expect(result).toEqual(expected)
  })

  it('Add student to a cohort', () => {
    // setup
    const expected = [
      {
        name: 'CohortFive',
        students: [student1],
        cohortCapacity: 24
      }
    ]
    cohortManager.createStudent(student1)
    cohortManager.createCohort('CohortFive')
    // execute
    cohortManager.addStudentToCohort('Toby', 'Carlo', 'CohortFive')
    const result = cohortManager.getAllCohorts()
    // verify
    expect(result).toEqual(expected)
  })

  it('Add multiple students to a cohort', () => {
    // setup
    const expected = [
      {
        name: 'CohortFive',
        students: [student1, student2, student3],
        cohortCapacity: 24
      }
    ]
    cohortManager.createStudent(student1)
    cohortManager.createStudent(student2)
    cohortManager.createStudent(student3)
    cohortManager.createCohort('CohortFive')
    // execute
    cohortManager.addStudentToCohort('Toby', 'Carlo', 'CohortFive')
    cohortManager.addStudentToCohort('User2', 'Name2', 'CohortFive')
    cohortManager.addStudentToCohort('User3', 'Name3', 'CohortFive')
    const result = cohortManager.getAllCohorts()
    // verify
    expect(result).toEqual(expected)
  })

  it('Removing a student from a specific cohort', () => {
    // setup
    const expected = [
      {
        name: 'CohortFive',
        students: [student1, student3],
        cohortCapacity: 24
      }
    ]
    cohortManager.createStudent(student1)
    cohortManager.createStudent(student2)
    cohortManager.createStudent(student3)
    cohortManager.createCohort('CohortFive')
    cohortManager.addStudentToCohort('Toby', 'Carlo', 'CohortFive')
    cohortManager.addStudentToCohort('User2', 'Name2', 'CohortFive')
    cohortManager.addStudentToCohort('User3', 'Name3', 'CohortFive')
    // execute
    cohortManager.removeStudentFromCohort(2, 'CohortFive')
    const result = cohortManager.getAllCohorts()
    // verify
    expect(result).toEqual(expected)
  })

  it("Removing a student that doesn't exist", () => {
    // setup
    const expected = 'Student not found!'
    cohortManager.createCohort('CohortFive')
    // execute
    const result = cohortManager.removeStudentFromCohort(2, 'CohortFive')
    // verify
    expect(result).toEqual(expected)
  })

  // ---------------> Extension 1
  it('Searching for a student by their ID', () => {
    // setup
    const expected = student1
    cohortManager.createStudent(student1)
    // execute
    const result = cohortManager.searchStudent(1)
    // verify
    expect(result).toEqual(expected)
  })
})
