const Student = require('../src/Student')

describe('Cohort', () => {
  let student
  beforeEach(() => {
    student = new Student('Patrik', 'Ellini', 'random link', 'random email')
  })

  it('should return a cohort with the given name', () => {
    expect(student).toBeInstanceOf(Student)
    expect(student.firstN).toEqual('Patrik')
  })
})
