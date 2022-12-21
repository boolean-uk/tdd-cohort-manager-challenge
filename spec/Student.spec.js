const { Student } = require('../src/Student')

describe('Cohort', () => {
  it('Creates an instance of the cohort class', () => {
    const testStudent = new Student(
      'bob',
      'smith',
      'bobzor',
      'bobzorro@gmail.com'
    )

    expect(testStudent).toBeInstanceOf(Student)
  })
})
