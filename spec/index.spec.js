import { Student } from '../src/index.js'

describe('student', () => {
  it('should have a id, fName, lName, git hub and email', () => {
    const student1 = new Student(
      1,
      'Farshad',
      'Bagdeli',
      'FBagdeli',
      'fbagdeli@gmail.com'
    )
  })
})