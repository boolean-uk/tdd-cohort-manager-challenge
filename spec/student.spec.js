import { Student } from '../src/student.js'

describe('Student', () => {
  it('creates a new instance with a studentID, firstName, lastName, githubUsername, and email property', () => {
    const result = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    expect(result.studentID).toEqual('01LS')
    expect(result.firstName).toEqual('Lee')
    expect(result.lastName).toEqual('Smith')
    expect(result.githubUsername).toEqual('koala333')
    expect(result.email).toEqual('lee.smith@hotmail.co.uk')
  })
})
