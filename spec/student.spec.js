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

    it('missing inputs', () => {
      const inputTemplate = {
        firstName: 'Bob',
        lastName: 'Builder',
        gitHubUserName: 'BobbyBuilder',
        email: 'bob@builder.com',
        cohortId: 7
      }

      for (const key in inputTemplate) {
        const input = { ...inputTemplate }
        delete input[key]

        const callback = () => new Student(input)

        expect(callback).toThrowError('student missing details')
      }
    })
  })
})
