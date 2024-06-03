import Student from '../src/student.js'

describe('student', () => {
  const student = new Student(1)
  it('should exist', () => {
    expect(student.id).toBe(1)
    expect(student.firstName).toBe('Bart')
    expect(student.id).toBe(1)
  })
})
