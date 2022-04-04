const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('Cohort', () => {
  it('add a student', () => {
    //set up
    const cohort = new Cohort('Cohort 1')
    const student = new Student(1, 'Asia', 'Rahman', 'Asiaaa', 'asia@gmail.com')
    const expected = [student]
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
