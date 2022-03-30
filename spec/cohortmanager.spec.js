const CohortManager = require('../src/cohortmanager.js')
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

  it('Adding a student to a list/cohort', () => {
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
})
