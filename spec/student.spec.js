import Student from '../src/student.js'
import { Organization } from '../src/organization.js'
import Cohort from '../src/cohort.js'

describe('student', () => {
  let myOrganization
  let newCohort

  beforeAll(() => {
    myOrganization = new Organization('Boolean')
    myOrganization.addBranch('UK')
    newCohort = new Cohort('My TestCohort')
    myOrganization.branches[0].addCohort(newCohort)
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
    const test = new Student(
      'Nathan',
      'The Wise',
      'no@email.com',
      'nwise',
      myOrganization
    )

    expect(JSON.stringify(test)).toEqual(JSON.stringify(expected))
    expect(typeof test.studentID).toEqual('number')
    expect(typeof test.firstName).toEqual('string')
    expect(typeof test.lastName).toEqual('string')
    expect(typeof test.email).toEqual('string')
    expect(typeof test.githubUsername).toEqual('string')
    expect(test.email.match('@').length).toEqual(1)
  })

  it('returning the full name works', () => {
    const expected = 'Nathan The Wise'
    const student = new Student(
      'Nathan',
      'The Wise',
      'no@email.com',
      'nwise',
      myOrganization
    )
    expect(student.fullName()).toEqual(expected)
  })

  it('assigning to cohort', () => {
    const student = new Student(
      'Nathan',
      'The Wise',
      'no@email.com',
      'nwise',
      myOrganization
    )
    
    student.assignCohort(newCohort)
    expect(student.inCohort).toEqual(newCohort)
  })
})
