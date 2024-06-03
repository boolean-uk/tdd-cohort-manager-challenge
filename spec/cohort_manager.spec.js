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
  let cohortOne
  let cohortTwo
  beforeEach(() => {
    cohortOne = new Cohort(1)
    cohortTwo = new Cohort(2)
  })

  it('should exist', () => {
    expect(cohortOne.name).toBe(1)
  })

  it('should be able to add students to the student list', () => {
    cohortOne.addStudent('Pickle Rick', 'Sanchez')
    expect(cohortOne.studentsList.length).toBe(1)
    expect(cohortOne.studentsList[0].firstName).toBe('Pickle Rick')
    expect(cohortOne.studentsList[0].lastName).toBe('Sanchez')
    expect(cohortOne.studentsList[0].githubUsername).toBe('picklerick')
    expect(cohortOne.studentsList[0].id).toBe(42)
  })

  it('should throw an error if there is no student with the provided name', () => {
    expect(() => {
      cohortOne
        .addStudent('Wrong', 'Name')
        .toThrowError('There is no student with this name or surname')
    })
  })

  it('should throw an error if the cohort is full', () => {
    // I ll modify the code so cohort max size is 5 so I don't have to add 24 students
    cohortOne.addStudent('Bart', 'Simpson')
    cohortOne.addStudent('Lisa', 'Simpson')
    cohortOne.addStudent('Homer', 'Simpson')
    cohortOne.addStudent('Eric', 'Cartman')
    cohortOne.addStudent('Kyle', 'Broflovski')

    expect(() => {
      cohortOne
        .addStudent('Stan', 'Marsh')
        .toThrowError(
          `Cohort ${this.name} is full. No more students can be added. Choose another cohort`
        )
    })
  })
})
