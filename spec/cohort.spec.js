import { Cohort } from '../src/cohort.js'
import { StudentManager } from '../src/student-manager.js'
import { Student } from '../src/student.js'
import { CohortManager } from '../src/cohort-manager.js'

describe('cohort', () => {
  let studentManager
  let cohortManager
  let student1
  let student2
  let student3
  let student4
  beforeEach(() => {
    studentManager = new StudentManager()
    cohortManager = new CohortManager()
    student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    student2 = new Student('Jen', 'Smith', 'panda93', 'jen.smith@gmail.com')
    student3 = new Student(
      'Matt',
      'Micheal',
      'random203956',
      'm.michael@gmail.com'
    )
    student4 = new Student('Matt', 'Smith', 'citizenErased', 'm.kerr@gmail.com')
    studentManager.handleNewItem(student1)
    studentManager.handleNewItem(student2)
    studentManager.handleNewItem(student3)
    studentManager.handleNewItem(student4)
  })

  it('creates a new instance of cohort with a name, an id, and an empty student list as properties', () => {
    const result = new Cohort('best cohort ever', cohortManager)
    expect(result.id).toBeUndefined()
    expect(result.cohortName).toEqual('best cohort ever')
    expect(result.students).toEqual([])
  })

  it('throws an error and does not create a new cohort if the name is already in use', () => {
    const cohort = new Cohort('best cohort ever', cohortManager)
    cohortManager.handleNewItem(cohort)
    const callback = () => new Cohort('best cohort ever', cohortManager)
    expect(callback).toThrowError(
      'cannot create cohort - this name is already taken'
    )
  })

  it('throws an error and does not create an instance of Cohort() when the input is missing', () => {
    const callback = () => new Cohort()
    expect(callback).toThrowError('cohort could not be created - missing input')
  })

  it('increase occupancy by one', () => {
    const cohort = new Cohort('my cohort', cohortManager)
    cohort.increaseOccupancyByOne()
    const result = cohort.increaseOccupancyByOne()
    expect(result).toEqual(2)
  })

  it('decrease occupancy by one', () => {
    const cohort = new Cohort('my cohort', cohortManager)
    cohort.increaseOccupancyByOne()
    cohort.increaseOccupancyByOne()
    cohort.increaseOccupancyByOne()
    cohort.increaseOccupancyByOne()
    const result = cohort.decreaseOccupancyByOne()
    expect(result).toEqual(3)
  })

  it('is not full', () => {
    const cohort = new Cohort('my cohort', cohortManager)
    cohort.occupancy = 10
    const result = cohort.isFull()
    expect(result).toBeFalse()
  })

  it('is full', () => {
    const cohort = new Cohort('my cohort', cohortManager)
    cohort.occupancy = 24
    const result = cohort.isFull()
    expect(result).toBeTrue()
  })

  it('is full beyond its capacity', () => {
    const cohort = new Cohort('my cohort', cohortManager)
    cohort.occupancy = 75
    const callback = () => cohort.isFull()
    expect(callback).toThrowError(
      'capacity exceeded - there should never be more than 24 students'
    )
  })

  it('does not add a student to a cohort if the student is already enrolled in another, and throws an error instead', () => {
    const cohort1 = new Cohort('best cohort ever', cohortManager)
    const cohort2 = new Cohort('some other cohort', cohortManager)
    cohortManager.handleNewItem(cohort1)
    cohortManager.handleNewItem(cohort2)
    cohort1.addStudent(2, studentManager)
    const callback = () => cohort2.addStudent(2, studentManager)
    expect(callback).toThrowError(
      'this student is already enrolled elsewhere - cannot be added to this cohort'
    )
    expect(cohort2.students).toEqual([])
  })

  it('add a specific student to a cohort and increase occupancy by one and set the student cohort name', () => {
    const cohort1 = new Cohort('best cohort ever', cohortManager)
    const result = cohort1.addStudent(2, studentManager)
    expect(result[0].id).toEqual(2)
    expect(result[0].firstName).toEqual('Jen')
    expect(result[0].lastName).toEqual('Smith')
    expect(cohort1.occupancy).toEqual(1)
    expect(result[0].cohortName).toEqual('best cohort ever')
  })

  it('throws an error if attempt to add students while the cohort is full', () => {
    const cohort = new Cohort('full cohort', cohortManager)
    cohort.occupancy = 24
    const callback = () => cohort.addStudent(1, studentManager)
    expect(callback).toThrowError('cannot add students - this cohort is full')
  })

  it('assigns the name of this cohort to a student as its cohortName property', () => {
    const cohort = new Cohort('some cool name', cohortManager)
    cohort.addStudent(2, studentManager)
    const result = cohort.assignCohortNameToStudent(2, studentManager)
    expect(result.id).toEqual(2)
    expect(result.cohortName).toEqual('some cool name')
  })

  it('resets the cohortName property on a student upon removal from a cohort', () => {
    const cohort = new Cohort('some cool name', cohortManager)
    cohort.addStudent(2, studentManager)
    cohort.assignCohortNameToStudent(2, studentManager)
    const result = cohort.clearStudentCohortName(2, studentManager)
    expect(result.id).toEqual(2)
    expect(result.cohortName).toBeUndefined()
  })
})
