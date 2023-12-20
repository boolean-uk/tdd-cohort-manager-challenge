import Student from "../src/student.js"

describe('student', () => {
  it('creation works', () => {
    const expected = {
      firstName: 'Nathan',
      lastName: 'The Wise',
      email: '',
      githubUsername: '',
      inCohort: {}
    }
    const test = new Student('Nathan', 'The Wise')

    expect(JSON.stringify(test)).toEqual(JSON.stringify(expected))
  })
})
