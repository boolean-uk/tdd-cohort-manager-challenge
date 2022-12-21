const { Student } = require('../src/Student')

describe('Student class', () => {
  let StudentClass
  beforeEach(() => {
    StudentClass = new Student()
  })

  // create
  it('expects the Student to be created and returned', () => {
    expect(StudentClass.create('Luc', 'Sim', 't@e.com', 'git', 1)).toEqual({
      studentID: 1,
      firstName: 'Luc',
      lastName: 'Sim',
      email: 't@e.com',
      githubUser: 'git',
      cohortID: null
    })
  })
})
