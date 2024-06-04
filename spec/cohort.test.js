const Cohort = require('../src/Cohort')
const { studentGenerator } = require('./fake-data')
const Student = require('../src/Student')

describe('Cohort', () => {
  let cohort
  const dummyStudent = new Student('rafa', 'lopes', 'github', 'email')

  beforeEach(() => {
    cohort = new Cohort('12')
  })

  it('Should always have a name', () => {
    expect(cohort.name).toBe('12')
    expect(() => new Cohort()).toThrow(Error)
  })

  it('Should have a maximum of 24 students', () => {
    const students = studentGenerator(24)
    cohort.addStudents(...students)
    expect(cohort.studentsCount).toBe(24)
  })

  it('Should not have duplicate students', () => {
    const dummyStudent = new Student('rafa', 'lopes', 'github', 'email')

    cohort.addStudents(dummyStudent, dummyStudent)

    expect(cohort.studentsCount).toBe(1)
  })

  it('Should throw if doesnt find a student', () => {
    cohort.addStudents(dummyStudent)
    expect(() => cohort.findStudent('1321321516')).toThrow()
  })
})
