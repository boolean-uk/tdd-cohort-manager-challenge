const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('Cohort', () => {
  it('add a student', () => {
    //set up
    const cohort = new Cohort()
    const student = new Student()
    const expected = {
      id: '1',
      fullName: 'Asia',
      lastName: 'Rahman',
      githubUsername: 'Asiaaa',
      email: 'asia@gmail.com'
    }
    //execute
    const result = cohort.addStudent(student)
    //verify
    expect(result).toEqual(expected)
  })

  /* it('remove a student', () => {
    //set up
    const cohort = new Cohort()
    const expected = [
      // to complete
    ]
    //execute
    cohort.addStudent()
    const result = cohort.removeStudent()
    //verify
    expect(result).toEqual(expected)
  }) */
})
