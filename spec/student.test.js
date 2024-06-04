const Student = require('../src/Student.js')

describe('Student', () => {
  it('Should define a student uuid after initialization', () => {
    const student = new Student(
      'Rafa',
      'Lopes',
      'rafa-lopes-pt.github',
      'rafalopes.email'
    )

    expect(student.id).toBeDefined()
  })

  it('Should throw if any of the required args is not provided', () => {
    expect(() => new Student('asd', 'asd', 'asd')).toThrow(TypeError)
    expect(() => new Student('asd', 'asd')).toThrow(TypeError)
    expect(() => new Student('asd')).toThrow(TypeError)
    expect(() => new Student()).toThrow(TypeError)
  })
})
