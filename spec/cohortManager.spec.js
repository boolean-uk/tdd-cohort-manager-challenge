const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('The Cohort Manager should be able to', () => {
  let cm

  beforeEach(() => {
    cm = new CohortManager()
  })

  it('create a new cohort with a name', () => {
    // set up
    const expected = [new Cohort('test')]
    //execute
    cm.createCohort('test')
    // verify
    expect(cm.cohorts).toEqual(expected)
  })

  it('create multiple cohorts', () => {
    // set up
    const expected = [
      new Cohort('test1'),
      new Cohort('test2'),
      new Cohort('test3')
    ]
    // execute
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    //verify
    expect(cm.cohorts).toEqual(expected)
  })

  it('should display an error message if a cohort was already created', () => {
    // set up
    cm.createCohort('test1')
    const expected = 'Cohort already exists'
    // execute
    const res = cm.createCohort('test1')
    // verfiy
    expect(res).toEqual(expected)
  })

  it('find a cohort by name', () => {
    // set up
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    const expected = new Cohort('test2')
    // execute
    const res = cm.searchCohort('test2')
    // verify
    expect(res).toEqual(expected)
  })

  it('return an error message if cohort is not found', () => {
    // set up
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    const expected = 'Cohort not found'
    // execute
    const res = cm.searchCohort('test5')
    // verify
    expect(res).toEqual(expected)
  })

  it('create a new Student', () => {
    // set up
    const expected = [new Student(1, 'Max', 'Mustermann')]
    // execute
    cm.newStudent('Max', 'Mustermann')
    // verfiy
    expect(cm.students).toEqual(expected)
  })

  it('create Multiple students', () => {
    // set up
    const expected = [
      new Student(1, 'Max', 'Mustermann'),
      new Student(2, 'Ryley', 'Suzanne'),
      new Student(3, 'Ziya', 'Blagorodna')
    ]
    // execute
    cm.newStudent('Max', 'Mustermann')
    cm.newStudent('Ryley', 'Suzanne')
    cm.newStudent('Ziya', 'Blagorodna')
    // verify
    expect(cm.students).toEqual(expected)
  })

  it('add a student to a cohort', () => {
    // set up
    const expected = new Cohort('test')
    expected.students.push(new Student(1, 'Max', 'Mustermann'))
    cm.createCohort('test')
    cm.newStudent('Max', 'Mustermann')
    // execute
    cm.addStudentToCohort(1, 'test')
    // verfiy
    expect(cm.cohorts[0]).toEqual(expected)
  })

  it('add a student to a cohort', () => {
    // set up
    const expected = new Cohort('test2')
    expected.students.push(new Student(1, 'Max', 'Mustermann'))
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    cm.newStudent('Max', 'Mustermann')
    // execute
    cm.addStudentToCohort(1, 'test2')
    // verfiy
    expect(cm.cohorts[1]).toEqual(expected)
  })

  it('return an error message if student does not exist', () => {
    // set up
    const expected = 'Student does not exist'
    cm.createCohort('test')
    // execute
    const res = cm.addStudentToCohort(1, 'test')
    // verfiy
    expect(res).toEqual(expected)
  })

  it('return an error message if cohort does not exist', () => {
    // set up
    const expected = 'Cohort does not exist'
    cm.newStudent('Max', 'Mustermann')
    // execute
    const res = cm.addStudentToCohort(1, 'test')
    // verify
    expect(res).toEqual(expected)
  })

  it('remove a cohort by name', () => {
    // set up
    const expected = []
    cm.createCohort('test')
    // execute
    cm.removeCohort('test')
    // verfiy
    expect(cm.cohorts).toEqual(expected)
  })

  it('remove a cohort by name', () => {
    // set up
    const expected = [new Cohort('test1'), new Cohort('test3')]
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    // execute
    cm.removeCohort('test2')
    // verfiy
    expect(cm.cohorts).toEqual(expected)
  })

  it('return an error message if cohort does not exist', () => {
    // set up
    const expected = 'Cohort does not exist'
    // execute
    const res = cm.removeCohort('test1')
    // verfiy
    expect(res).toEqual(expected)
  })

  it('remove a student from a cohort', () => {
    // set up
    const expected = new Cohort('test')
    cm.createCohort('test')
    cm.newStudent('Max', 'Mustermann')
    cm.addStudentToCohort(1, 'test')
    // execute
    cm.removeStudentFromCohort(1, 'test')
    // verfiy
    expect(cm.cohorts[0]).toEqual(expected)
  })

  it('retrun an error if the student does not exist', () => {
    // set up
    const expected = 'Student does not exist'
    cm.createCohort('test')
    // execute
    const res = cm.removeStudentFromCohort(1, 'test')
    // verfiy
    expect(res).toEqual(expected)
  })

  it('return an error message if cohort does not exist', () => {
    // set up
    const expected = 'Cohort does not exist'
    cm.newStudent('Max', 'Mustermann')
    // execute
    const res = cm.removeStudentFromCohort(1, 'test')
    // verfiy
    expect(res).toEqual(expected)
  })

  it('return an error message if student is not in cohort', () => {
    // set up
    const expected = 'Student is not in this Cohort'
    cm.newStudent('Max', 'Mustermann')
    cm.createCohort('test')
    // execute
    const res = cm.removeStudentFromCohort(1, 'test')
    // verfiy
    expect(res).toEqual(expected)
  })
})
