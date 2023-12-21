import { Cohort } from '../src/cohort.js'
import { StudentManager } from '../src/student-manager.js'
import { Student } from '../src/student.js'

describe('cohort', () => {
  let studentManager
  let student1
  let student2
  let student3
  beforeEach(() => {
    studentManager = new StudentManager()
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
    studentManager.handleNewItem(student1)
    studentManager.handleNewItem(student2)
    studentManager.handleNewItem(student3)
  })
  it('creates a new instance of cohort with a name, an id, and an empty student list as properties', () => {
    const result = new Cohort('best cohort ever')
    expect(result.id).toBeUndefined()
    expect(result.cohortName).toEqual('best cohort ever')
    expect(result.students).toEqual([])
  })
  it('throws an error and does not create an instance of Cohort() when the input is missing', () => {
    const result = () => new Cohort()
    expect(result).toThrowError('cohort could not be created - missing input')
  })
  it('increase occupancy by one', () => {
    const cohort = new Cohort('my cohort')
    cohort.increaseOccupancyByOne()
    const result = cohort.increaseOccupancyByOne()
    expect(result).toEqual(2)
  })
  it('decrease occupancy by one', () => {
    const cohort = new Cohort('my cohort')
    cohort.increaseOccupancyByOne()
    cohort.increaseOccupancyByOne()
    cohort.increaseOccupancyByOne()
    cohort.increaseOccupancyByOne()
    const result = cohort.decreaseOccupancyByOne()
    expect(result).toEqual(3)
  })
  it('add a specific student to a cohort', () => {
    const cohort1 = new Cohort('best cohort ever')
    const result = cohort1.addStudent(2, studentManager)
    expect(result[0].id).toEqual(2)
    expect(result[0].firstName).toEqual('Jen')
    expect(result[0].lastName).toEqual('Smith')
  })
  it('this student does not exist in the system', () => {
    const cohort1 = new Cohort('best cohort ever')
    const result = () => cohort1.addStudent(576, studentManager)
    expect(result).toThrowError('student not found')
  })
  it('removes a student from a cohort', () => {
    const cohort1 = new Cohort('best cohort ever')
    cohort1.addStudent(2, studentManager)
    cohort1.addStudent(1, studentManager)
    cohort1.addStudent(3, studentManager)
    const result = cohort1.removeStudent(2)
    expect(result.length).toEqual(2)
    expect(result[0].id).toEqual(1)
    expect(result[1].id).toEqual(3)
  })
  it('includes this specific student', () => {
    const cohort1 = new Cohort('best cohort ever')
    cohort1.addStudent(2, studentManager)
    const result = cohort1.searchCohortById(2, studentManager)
    expect(result).toBe(cohort1.students[0])
  })
  it('this student is not in this cohort', () => {
    const cohort1 = new Cohort('best cohort ever')
    cohort1.addStudent(2, studentManager)
    const result = () => cohort1.searchCohortById(576, studentManager)
    expect(result).toThrowError('student not found')
  })
})
