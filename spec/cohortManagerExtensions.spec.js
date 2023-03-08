const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('Extension: The Cohort Manager should also be able to', () => {
  let cm

  beforeEach(() => {
    cm = new CohortManager()
  })

  it('search a student by id', () => {
    // set up
    const expected = new Student(1, 'Max', 'Mustermann')
    cm.newStudent('Max', 'Mustermann')
    // execute
    const res = cm.searchStudent(1)
    // verify
    expect(res).toEqual(expected)
  })

  it('search a student by id', () => {
    // set up
    const expected = new Student(2, 'Max', 'Mustermann')
    cm.newStudent('Ryley', 'Suzanne')
    cm.newStudent('Max', 'Mustermann')
    cm.newStudent('Ziya', 'Blagorodna')
    // execute
    const res = cm.searchStudent(2)
    // verify
    expect(res).toEqual(expected)
  })

  it('return an error message if the student does not exist', () => {
    // set up
    const expected = 'Student does not exist'
    // execute
    const res = cm.searchStudent(1)
    // verify
    expect(res).toEqual(expected)
  })

  it('to know when a cohort reached its max size', () => {
    //set up
    const expected = 'Cohort is full'
    cm.createCohort('test')
    for (let i = 0; i < 24; i++) {
      cm.newStudent('test', 'student')
      cm.addStudentToCohort(i + 1, 'test')
    }
    // execute
    cm.newStudent('Dont', 'Add')
    const res = cm.addStudentToCohort(25, 'test')
    // verify
    expect(res).toEqual(expected)
  })
})
