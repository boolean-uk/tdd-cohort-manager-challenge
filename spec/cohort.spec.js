const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('Cohort class', () => {
  beforeEach( () => {
    cohort = new Cohort('Cohort 5')
    student = new Student(1, 'John', 'Doe', 'johnnycode', 'johndoe@email.com')
  })

  it('adds student to students array', () => {
    expect(cohort.addStudent(student)).toEqual(student)
    expect(cohort.students).toEqual([student])
  })

  it('adds multiple students to students array', () => {
    cohort.addStudent(student)
    expect(cohort.addStudent(student)).toEqual(student)
    expect(cohort.students.length).toEqual(2)
  })

  it('removes student from students array', () => {
    cohort.addStudent(student)
    expect(cohort.removeStudent(1)).toEqual(student)
    expect(cohort.students.length).toEqual(0)
  })

  it('throws an error if student does not exist in students array', () => {
    cohort.addStudent(student)
    expect(() => { cohort.removeStudent(2) })
      .toThrowError(Error, 'Student not found')
    expect(cohort.students.length).toEqual(1)
  })

})