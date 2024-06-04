const Student = require('../src/Student.js')

describe('Student', () => {
  const student = new Student(
    'Rafa',
    'Lopes',
    'rafa-lopes-pt.github',
    'rafalopes.email'
  )

  it('Should define a student uuid after initialization', () => {
    expect(student.id).toBeDefined()
  })

  it('Should have all other properties defined', () => {
    expect(student.firstName).toBeDefined()
    expect(student.lastName).toBeDefined()
    expect(student.github).toBeDefined()
    expect(student.email).toBeDefined()
  })

  it('Should throw if any of the required args is not provided', () => {
    expect(() => new Student('asd', 'asd', 'asd')).toThrow(TypeError)
    expect(() => new Student('asd', 'asd')).toThrow(TypeError)
    expect(() => new Student('asd')).toThrow(TypeError)
    expect(() => new Student()).toThrow(TypeError)
  })
})
