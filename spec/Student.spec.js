const Student = require('../src/student')

describe('Student', () => {
  let student

  beforeEach(() => {
    student = new Student()
  })

  it('Should create a student with the required properties', () => {
    // set up
    const expected = {
      id: 1,
      firstName: 'name',
      lastName: 'last name',
      githubUsername: '',
      email: ''
    }
    // exucute
    const result = student.create('')

    // verify
    expect(result).toEqual(expected)
    console.log(student)
  })
})
