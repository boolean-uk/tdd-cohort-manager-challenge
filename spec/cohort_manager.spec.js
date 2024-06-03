import Student from '../src/student.js'
import Cohort from '../src/cohorts.js'

describe('student', () => {
  const student = new Student('Pickle Rick', 'Sanchez')
  it('should exist', () => {
    expect(student.id).toBe(42)
    expect(student.firstName).toBe('Pickle Rick')
    expect(student.lastName).toBe('Sanchez')
    expect(student.githubUsername).toBe('picklerick')
    expect(student.email).toBe('picklerick@pickledimension.com')
  })
})

describe('Cohort', () => {
  const cohortOne = new Cohort(1)
  const student = new Student('Pickle Rick', 'Sanchez')
  it('should exist', () => {
    expect(cohortOne.name).toBe(1)
  })
  it('should be able to add students to the student list', () => {
    expect(cohortOne.studentsList.length).toBe(1)
    expect(cohortOne.studentsList[0].firstName).toBe('Pickle Rick')
  })
})
