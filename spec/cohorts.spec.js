import Student from '../src/student.js'

describe('student', () => {
  const student = new Student('Pickle Rick', 'Sanchez')
  it('should exist', () => {
    expect(student.id).toBe(42)
    expect(student.firstName).toBe('Pickle Rick')
    expect(student.lastName).toBe('Sanchez')
    expect(student.githubUsername).toBe('picklerick')
    expect(student.email).toBe('picklerick@pickledimension.com')
  })
})
