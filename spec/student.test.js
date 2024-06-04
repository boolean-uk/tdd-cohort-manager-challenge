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
})
