import { StudentManager } from '../src/student-manager.js'
import { Student } from '../src/student.js'

describe('StudentManager', () => {
  let manager
  beforeEach(() => {
    manager = new StudentManager()
  })
  it('updates the list property', () => {
    const student = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const result = manager.setList(student)
    expect(result[0].lastName).toEqual('Smith')
    expect(result[0].firstName).toEqual('Lee')
    expect(result[0].githubUsername).toEqual('koala333')
    expect(result[0].email).toEqual('lee.smith@hotmail.co.uk')
  })
  it('generates unique student id', () => {
    manager.increaseIdCount()
    manager.increaseIdCount()
    manager.increaseIdCount()
    const result = manager.increaseIdCount()
    expect(result).toEqual(4)
  })
  it('assigns a unique id to each student', () => {
    const student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    manager.increaseIdCount()
    manager.setList(student1)
    manager.assignId()
    manager.increaseIdCount()
    const student2 = new Student(
      'Jen',
      'Smith',
      'panda93',
      'jen.smith@gmail.com'
    )
    manager.setList(student2)
    const result = manager.assignId()
    expect(result).toEqual(2)
  })
  it('handles each new student separately and ensure a unique id is allocated to each', () => {
    const student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const student2 = new Student(
      'Jen',
      'Smith',
      'panda93',
      'jen.smith@gmail.com'
    )
    const student3 = new Student(
      'Matt',
      'Micheal',
      'random203956',
      'm.michael@gmail.com'
    )
    manager.handleNewItem(student1)
    manager.handleNewItem(student2)
    const result = manager.handleNewItem(student3)
    expect(result[0].id).toEqual(1)
    expect(result[1].id).toEqual(2)
    expect(result[2].id).toEqual(3)
  })
  it('includes this specific student', () => {
    const student1 = new Student(
      'Lee',
      'Smith',
      'koala333',
      'lee.smith@hotmail.co.uk'
    )
    const student2 = new Student(
      'Jen',
      'Smith',
      'panda93',
      'jen.smith@gmail.com'
    )
    manager.handleNewItem(student1)
    manager.handleNewItem(student2)
    const result = manager.searchSchoolById(1)
    expect(result).toBe(manager.list[0])
  })
  it('this student is not in this cohort', () => {
    const result = () => manager.searchSchoolById(1)
    expect(result).toThrowError('student not found')
  })
})
