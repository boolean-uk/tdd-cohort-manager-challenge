import { Cohort, Student } from '../src/manager.js'

describe('Student', () => {
  it('should set a students details and return fullname', () => {
    const student = new Student()
    student.studentDetails(
      '1234',
      'John',
      'Doe',
      'codeDoe',
      'john_doe@boolean.com'
    )
    expect(student.studentID).toBe('1234')
    expect(student.firstName).toBe('John')
    expect(student.lastName).toBe('Doe')
    expect(student.githubUsername).toBe('codeDoe')
    expect(student.email).toBe('john_doe@boolean.com')
    expect(student.getName()).toBe('John Doe')
  })
})

describe('Cohort', () => {
  let cohort
  let student

  beforeEach(() => {
    cohort = new Cohort('Cohort 1')
    student = new Student()
    student.studentDetails(
      '1234',
      'John',
      'Doe',
      'codeDoe',
      'john_doe@boolean.com'
    )
  })

  it('should add a student to the cohort', () => {
    cohort.addStudent(student)
    expect(cohort.students.length).toBe(1)
    expect(cohort.students[0].studentID).toBe('1234')
  })
})
