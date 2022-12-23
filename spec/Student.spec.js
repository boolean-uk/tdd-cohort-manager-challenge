const Student = require('../src/student')

describe('A new Student', () => {
  it('should create a new student to be added to a cohort', () => {
    const addStudent = new Student(
      'First name',
      'Last Name',
      'GitHubUser',
      'myEmail@myemails.com'
    )
    expect(addStudent).toBeInstanceOf(Student)
  })
})
