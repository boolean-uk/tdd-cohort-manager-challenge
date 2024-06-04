import Student from '../src/student.js'
import Cohort from '../src/cohorts.js'
import CohortManager from '../src/cohort_manager.js'

describe('student', () => {
  const student = new Student('Pickle Rick', 'Sanchez')
  it('should exist', () => {
    expect(student.id).toBe(42)
    expect(student.firstName).toBe('Pickle Rick')
    expect(student.lastName).toBe('Sanchez')
    expect(student.githubUsername).toBe('picklerick')
    expect(student.email).toBe('picklerick@pickledimension.com')
  })

  it('should throw an error if there is no student with the provided name surname in the studentsDB', () => {
    expect(() => {
      const student = new Student('Pick', 'Nose')
    }).toThrowError('There is no student with this name or surname')
  })
})

describe('Cohort', () => {
  let cohortOne
  let cohortTwo
  let cohortThree
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
    expect(() => cohortOne.addStudent('Wrong', 'Name')).toThrowError(
      'There is no student with this name or surname'
    )
  })

  it('should not add an already existing student in the cohort', () => {
    cohortOne.addStudent('Bart', 'Simpson')
    cohortOne.addStudent('Lisa', 'Simpson')
    expect(cohortOne.studentsList.length).toBe(2)

    // cohortOne.addStudent('Bart', 'Simpson')
    // expect(cohortOne.studentsList.length).toBe(2)
    expect(() => cohortOne.addStudent('Bart', 'Simpson')).toThrowError(
      `Bart Simpson is already enrolled in Cohort 1`
    )
  })

  // it('should throw an error if the cohort is full', () => {
  //   // I ll modify the code so cohort max size is 5 so I don't have to add 24 students
  //   cohortOne.addStudent('Bart', 'Simpson')
  //   cohortOne.addStudent('Lisa', 'Simpson')
  //   cohortOne.addStudent('Homer', 'Simpson')
  //   cohortOne.addStudent('Eric', 'Cartman')
  //   cohortOne.addStudent('Kyle', 'Broflovski')
  //   expect(() => cohortOne.addStudent('Stan', 'Marsh')).toThrowError(
  //     `Cohort 1 is full. No more students can be added. Choose another cohort`
  //   )
  // })

  it('should remove a student from a cohort', () => {
    cohortOne.addStudent('Bart', 'Simpson')
    cohortOne.addStudent('Lisa', 'Simpson')
    cohortOne.addStudent('Homer', 'Simpson')
    cohortOne.removeStudent('Bart', 'Simpson')
    expect(cohortOne.studentsList.length).toBe(2)
  })

  it('should through an error and give a message if there is no student with the provided name/surname in the cohort', () => {
    cohortOne.addStudent('Eric', 'Cartman')
    cohortOne.addStudent('Kyle', 'Broflovski')

    expect(() => cohortOne.removeStudent('Stan', 'Marsh')).toThrowError(
      `There is no student named Stan Marsh in Cohort 1\n`
    )

    expect(cohortOne.studentsList.length).toBe(2)
  })

  it('should find a student using the student id', () => {
    cohortOne.addStudent('Bart', 'Simpson')
    cohortOne.addStudent('Lisa', 'Simpson')
    cohortOne.addStudent('Homer', 'Simpson')
    cohortOne.addStudent('Eric', 'Cartman')
    cohortOne.addStudent('Kyle', 'Broflovski')

    const found = cohortOne.findStudent(2)
    expect(found.firstName).toBe('Lisa')
    expect(found.lastName).toBe('Simpson')
  })

  it('should return an error if wrong id is provided for findStudent', () => {
    cohortOne.addStudent('Eric', 'Cartman') // id = 4
    cohortOne.addStudent('Kyle', 'Broflovski') // id = 5

    expect(() => cohortOne.findStudent(22)).toThrowError(
      `There is no student with id 22 in Cohort 1\n`
    )
  })
})

describe('CohortManager', () => {
  let manager
  beforeEach(() => {
    manager = new CohortManager()
  })

  it('should exist', () => {
    expect(manager.cohortsList.length).toBe(0)
  })

  it('should add a new Cohort with the provided name', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    expect(manager.cohortsList.length).toBe(2)
  })

  it('should not create a cohort with an already existing cohort name', () => {
    // console.log(manager.cohortsList.length)
    manager.createCohort(1)

    expect(() => manager.createCohort(1)).toThrowError(
      'A cohort with this name already exists\n'
    )
  })

  it('should remove a cohort with the provided cohort name', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    // console.log(manager.cohortsList.length)
    manager.removeCohort(2)
    expect(manager.cohortsList.length).toBe(1)
  })

  it('should throw an error if non-existing cohort is beeing removed', () => {
    manager.createCohort(1)
    manager.createCohort(2)

    expect(() => manager.removeCohort(4)).toThrowError(
      'No cohort with this name\n'
    )
  })

  it('should find and display a cohort with the provided name', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    manager.createCohort(3)

    const found = manager.findCohort(2)
    expect(found.name).toBe(2)
  })

  it('should throw an error if non-existent cohort is searched', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    manager.createCohort(3)

    expect(() => manager.findCohort(22)).toThrowError(
      `No cohort with this name\n`
    )
  })

  it('should add a student with the provided studentId to a cohort with provided cohortName', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    manager.createCohort(3)

    manager.addStudentToCohort(11, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(1)
  })

  it('should throw an error if trying to add a student that already exists in this cohort', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    manager.createCohort(3)

    manager.addStudentToCohort(11, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(1)

    expect(() => manager.addStudentToCohort(11, 1)).toThrowError(
      'Ned Flanders is already enrolled in Cohort 1'
    )
  })

  it('should throw an error if trying to add a student that already exists in any cohort cohort', () => {
    manager.createCohort(1)
    manager.createCohort(2)

    manager.addStudentToCohort(11, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(1)

    expect(() => manager.addStudentToCohort(11, 2)).toThrowError(
      'Ned Flanders is already enrolled in Cohort 2'
    )
  })

  it('should remove a student with the provided studentId from a cohort with provided cohortName', () => {
    manager.createCohort(1)
    manager.createCohort(2)
    manager.createCohort(3)

    manager.addStudentToCohort(11, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(1)
    manager.removeStudentFromCohort(11, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(0)
  })

  it('should throw an error if trying to remove a student that is not in a cohort', () => {
    manager.createCohort(1)

    manager.addStudentToCohort(11, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(1)
    manager.removeStudentFromCohort(1, 1)
    expect(manager.cohortsList[0].studentsList.length).toBe(1)
  })
})
