import StudentManager from '../src/studentManager.js'
import Student from '../src/student.js'

describe('StudentManager:', () => {
  let studentManager

  beforeEach(() => {
    studentManager = new StudentManager()
    Student.resetId()
  })

  it('create Student', () => {
    const input = {
      firstName: 'Bob',
      lastName: 'Builder',
      gitHubUserName: 'BobbyBuilder',
      email: 'bob@builder.com',
      cohortId: 1
    }

    const result = studentManager.createStudent(input)

    const expected = { ...input, studentId: 1 }

    expect(result).toBe(1)
    expect(studentManager.students[0].details).toEqual(expected)
  })
})
