import Student from '../src/student.js'
import { Organization } from '../src/organization.js'

describe('student', () => {
  let myOrganization
  beforeAll(() => {
    myOrganization = new Organization('Boolean')
  })

  it('creation works', () => {
    const expected = {
      studentID: myOrganization.studentCounter + 1,
      firstName: 'Nathan',
      lastName: 'The Wise',
      email: 'no@email.com',
      githubUsername: 'nwise',
      inCohort: {}
    }
    const test = new Student('Nathan', 'The Wise', 'no@email.com', 'nwise', myOrganization)

    expect(JSON.stringify(test)).toEqual(JSON.stringify(expected))
  })

  it('returning the full name works', () => {
    const expected = 'Nathan The Wise'
    const student = new Student('Nathan', 'The Wise', 'no@email.com', 'nwise', myOrganization)
    expect(student.fullName()).toEqual(expected)
  })
})
