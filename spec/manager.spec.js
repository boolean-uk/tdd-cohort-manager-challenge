import { Student } from '../src/manager.js'

describe('Student', () => {
  it('should set a students details', () => {
    const student = new Student(
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
  })
})
