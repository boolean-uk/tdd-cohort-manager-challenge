import Student from '../src/student.js'

describe('Student:', () => {
  beforeEach(() => {
    Student.resetId()
  })

  describe('new instance -', () => {
    it('valid inputs', () => {
      const input = {
        firstName: 'Bob',
        lastName: 'Builder',
        gitHubUserName: 'BobbyBuilder',
        email: 'bob@builder.com',
        cohortId: 7
      }

      const student = new Student(input)

      const expected = { ...input, studentId: 1 }

      expect(student.details).toEqual(expected)
    })
  })
})
