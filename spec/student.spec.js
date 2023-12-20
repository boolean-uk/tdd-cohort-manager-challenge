import Student from '../src/student.js'

describe('student', () => {
  it('creation works', () => {
    const expected = {
      studentID: 0,
      firstName: 'Nathan',
      lastName: 'The Wise',
      email: '',
      githubUsername: '',
      inCohort: {}
    }
    const test = new Student('Nathan', 'The Wise')

    expect(JSON.stringify(test)).toEqual(JSON.stringify(expected))
  })

  it('returning the full name works', () => {
    const expected = 'Nathan The Wise'
    const student = new Student('Nathan', 'The Wise')
    expect(student.fullName()).toEqual(expected)
  })
})
