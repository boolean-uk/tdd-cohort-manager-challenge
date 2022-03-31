const Manager = require('../src/manager.js')
const Student = require('../src/student.js')

describe('Manager class', () => {
  beforeEach( () => {
    manager = new Manager()
  })

  it('creates a new cohort and adds it to the cohorts array', () => {
    expect(manager.createCohort('Cohort 5')).toEqual('Cohort 5 was created.')
    expect(manager.cohorts.length).toEqual(1)
    expect(manager.cohorts[0].name).toEqual('Cohort 5')
  })

  it('looks for and retrieves a specific cohort from the cohorts array', () => {
    manager.createCohort('Cohort 5')
    const expected = manager.cohorts[0]
    expect(manager.getCohort('Cohort 5')).toEqual(expected)
  })

  it('returns falsy if cohort does not exist in cohorts array', () => {
    manager.createCohort('Cohort 5')
    expect(manager.getCohort('Cohort 1')).toEqual(false)
  })

  it('deletes a specific cohort from the cohorts array', () => {
    manager.createCohort('Cohort 5')
    manager.createCohort('Cohort 1')
    const expected = manager.cohorts[1]
    expect(manager.removeCohort('Cohort 1')).toEqual(expected)
    expect(manager.cohorts.length).toEqual(1)
  })

  it('returns error message if cohort does not exist in cohorts array', () => {
    manager.createCohort('Cohort 5')
    const expected = 'Error: Cohort not found.'
    expect(manager.removeCohort('Cohort 1')).toEqual(expected)
    expect(manager.cohorts.length).toEqual(1)
  })

  it('adds a student to a specific cohort', () => {
    manager.createCohort('Cohort 5')
    const expected = manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    expect(manager.cohorts[0].students[0]).toEqual(expected)
    expect(manager.cohorts[0].students.length).toEqual(1)
  })

  it('updates studentID each time a new student is added', () => {
    manager.createCohort('Cohort 5')
    const expected = manager.studentID + 1
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    expect(manager.studentID).toEqual(expected)
  })

  it('returns error message if student is added to unexisting cohort', () => {
    manager.createCohort('Cohort 5')
    const expected = 'Error: Cohort not found.'
    expect(manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 1')).toEqual(expected)
    expect(manager.studentID).toEqual(1)
  })

  it('removes a student from a cohort', () => {
    manager.createCohort('Cohort 5')
    const expected = manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    expect(manager.removeStudent(1, 'Cohort 5')).toEqual(expected)
    expect(manager.cohorts[0].students.length).toEqual(0)
  })

  it('returns error message if student does not exist in cohort', () => {
    manager.createCohort('Cohort 5')
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    expect(manager.removeStudent(2, 'Cohort 5')).toEqual('Error: Student or Cohort not found')
    expect(manager.cohorts[0].students.length).toEqual(1)
  })

  it('returns error message if cohort does not exist', () => {
    manager.createCohort('Cohort 5')
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    expect(manager.removeStudent(1, 'Cohort 1')).toEqual('Error: Student or Cohort not found')
    expect(manager.cohorts[0].students.length).toEqual(1)
  })

  it('gets a student from any cohort', () => {
    manager.createCohort('Cohort 5')
    manager.createCohort('Cohort 6')
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    expected = manager.addStudent('Jane', 'Doe', 'janenycode', 'janedoe@email.com', 'Cohort 6')
    expect(manager.getStudent(2)).toEqual(expected)
  })

  it('does not add students beyond the cohorts max capacity', () => {
    manager.createCohort('Cohort 5')
    for (let i = 0; i < 24; i++) {
      manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    }
    expect(manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5'))
    .toEqual('Cohort at max capacity already.')
    expect(manager.cohorts[0].students.length).toEqual(24)
  })
  
  it('should not create cohorts with the same name', () => {
    manager.createCohort('Cohort 5')
    expect(manager.createCohort('Cohort 5')).toEqual('Cannot create cohorts with the same name.')
  })

  it('should not create cohorts without a name', () => {
    expect(manager.createCohort()).toEqual('Cannot create a cohort without a name.')
    expect(manager.createCohort('')).toEqual('Cannot create a cohort without a name.')
  })

  it('does not add a student that already exists', () => {
    manager.createCohort('Cohort 5')
    manager.createCohort('Cohort 6')
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    manager.studentID--
    expect(manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5'))
    .toEqual('Student already exists.')
    expect(manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 6'))
    .toEqual('Student already exists.')
  })

  it('returns an array with all students with matching names', () => {
    manager.createCohort('Cohort 5')
    manager.createCohort('Cohort 6')
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 6')
    manager.addStudent('Jane', 'Doe', 'janenycode', 'janedoe@email.com', 'Cohort 6')
    manager.addStudent('John', 'Doe', 'johnnycode', 'johndoe@email.com', 'Cohort 5')
    manager.addStudent('Rick', 'Sanchez', 'pickleRick', 'rs@email.com', 'Cohort 5')
    manager.addStudent('Rick', 'Sanchez', 'rickGH', 'sanchez@email.com', 'Cohort 5')
    expect(manager.getStudentByName('Rick', 'Sanchez').length).toEqual(2)
    expect(manager.getStudentByName('John', 'Doe').length).toEqual(2)
    expect(manager.getStudentByName('Jane', 'Doe').length).toEqual(1)
  })
})