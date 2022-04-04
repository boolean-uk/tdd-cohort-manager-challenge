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

  it('add two students', () => {
    //set up
    const cohort = new Cohort('Cohort 1')
    const sarah = new Student(2, 'Sarah', 'Malik', 'Sarahhh', 'sarah@gmail.com')
    const david = new Student(3, 'David', 'C', 'Daviddd', 'david@gmail.com')
    const expected1 = [sarah, david]
    const expected2 = [sarah, david]
    //execute
    const result1 = cohort.addStudent(sarah)
    const result2 = cohort.addStudent(david)
    //verify
    expect(result1).toEqual(expected1)
    expect(result2).toEqual(expected2)
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
