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
    const Sarah = new Student(2, 'Sarah', 'Malik', 'Sarahhh', 'sarah@gmail.com')
    const David = new Student(3, 'David', 'C', 'Daviddd', 'david@gmail.com')
    const expected1 = [Sarah, David]
    const expected2 = [Sarah, David]
    //execute
    const result1 = cohort.addStudent(Sarah)
    const result2 = cohort.addStudent(David)
    //verify
    expect(result1).toEqual(expected1)
    expect(result2).toEqual(expected2)
  })

  /* it('remove a student', (id) => {
    //set up
    const cohort = new Cohort()
    const expected = [
      // to complete: INSIDE THE ARRAY, INCLUDE AN PBJECT WITH STUDENT DETAILS
    ]
    //execute
    cohort.addStudent()
    // ADD ANOTHER STUDENT
    const result = cohort.removeStudent(id)
    //verify
    expect(result).toEqual(expected)
  }) */

  /*   it('it gives me an error because cannot find and remove student', () => {
    //set up
    const expected = "Student not found"
    //execute
    cohort.addStudent(Sarah)
    cohort.addStudent(David)
    cohort.addStudent(Asia)
    const result = cohort.removeStudent(Elena)
    //verify
    expect(result).toEqual(expected)
  }) */
})
