import { StudentManager } from '../src/student-manager.js'
import { Student } from '../src/student.js'

describe('StudentManager', () => {
  let manager
  beforeEach(() => {
    manager = new StudentManager()
  })
  it('updates the list property', () => {
    const student = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const result = manager.setList(student)
    expect(result[0].studentID).toEqual('01LS')
    expect(result[0].lastName).toEqual('Smith')
    expect(result[0].firstName).toEqual('Lee')
    expect(result[0].githubUsername).toEqual('koala333')
    expect(result[0].email).toEqual('lee.smith@hotmail.co.uk')
  })
})
