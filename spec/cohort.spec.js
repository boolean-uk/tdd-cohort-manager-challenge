import CohortList from '../src/CohortList.js'
import Student from '../src/Student.js'

describe('Cohort', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortList()
  })

  // Create Cohort
  it('Name is not empty: should return object of created cohort', () => {
    const expected = { id: 1, name: 'Cohort 1', studentsList: [] }

    const res = cohortList.createCohort('Cohort 1')

    expect(res.id).toEqual(expected.id)
    expect(res.name).toEqual(expected.name)
    expect(res.studentsList).toEqual(expected.studentsList)
  })

  it('Name is empty: Thrown error', () => {
    const expected = 'Enter name for create new cohort'

    expect(() => cohortList.createCohort('')).toThrowError(expected)
  })

  // Search Cohort By Cohort Name
  it('with entered name exist: Object of searched cohort', () => {
    const expected = { id: 2, name: 'Cohort 2', studentsList: [] }

    cohortList.createCohort('Cohort 1')
    cohortList.createCohort('Cohort 2')
    cohortList.createCohort('Cohort 3')

    const res = cohortList.getCohortByName('Cohort 2')

    expect(res.id).toEqual(expected.id)
    expect(res.name).toEqual(expected.name)
    expect(res.studentsList).toEqual(expected.studentsList)
  })

  it("with entered name doesn't exist: Thrown error", () => {
    const expected = 'Cohort not Found'

    expect(() => cohortList.getCohortByName('Cohort 1')).toThrowError(expected)
  })

  // Add Student to a Specific Cohort
  it('with entered name exist: List of students of entered cohort', () => {
    const student1 = new Student(
      1,
      'Nazar',
      'Tymiv',
      'NazarTymiv',
      'hello1@gmail.com'
    )

    const student2 = new Student(
      2,
      'Name 2',
      'Last Name 2',
      'GitHub Name 2',
      'hello2@gmail.com'
    )

    cohortList.createCohort('Boolean')

    const expected = [student1, student2]

    cohortList.addStudent(student1, 'Boolean')
    const res = cohortList.addStudent(student2, 'Boolean')

    expect(res).toEqual(expected)
  })

  it("with entered name doesn't exist: Thrown error", () => {
    const expected = 'Cohort not Found'

    const student = new Student(
      1,
      'Nazar',
      'Tymiv',
      'NazarTymiv',
      'hello1@gmail.com'
    )

    expect(() => cohortList.addStudent(student, 'Boolean')).toThrowError(
      expected
    )
  })

  // Remove Cohort
  it('with entered name exist: Removed cohort', () => {
    cohortList.createCohort('Cohort 1')
    const expected = cohortList.createCohort('Cohort 2')
    cohortList.createCohort('Cohort 3')

    const res = cohortList.removeCohort('Cohort 2')

    expect(res).toEqual(expected)
    expect(cohortList.list.length).toEqual(2)
  })

  it("Cohort with entered name doesn't exist", () => {
    const expected = 'Cohort not Found'

    expect(() => cohortList.removeCohort('Cohort 1')).toThrowError(expected)
  })

  // Remove Student
  it('Student exist in entered cohort: Removed student', () => {
    const student1 = new Student(
      1,
      'Nazar',
      'Tymiv',
      'NazarTymiv',
      'hello1@gmail.com'
    )
    const student2 = new Student(
      2,
      'Name 2',
      'Last Name 2',
      'GitHub Name 2',
      'hello2@gmail.com'
    )

    const expected = student2

    cohortList.createCohort('Boolean')
    cohortList.addStudent(student1, 'Boolean')
    cohortList.addStudent(student2, 'Boolean')

    const res = cohortList.removeStudent(2, 'Boolean')

    expect(res).toEqual(expected)
    expect(cohortList.list[0].studentsList.length).toEqual(1)
    expect(cohortList.list[0].studentsList[0]).toEqual(student1)
  })

  it("Student doesn't exist in entered cohort: Thrown error", () => {
    const expected = 'Student not Found'

    cohortList.createCohort('Boolean')

    expect(() => cohortList.removeStudent(1, 'Boolean')).toThrowError(expected)
  })

  it("Cohort doesn't exist: Thrown error", () => {
    const expected = 'Cohort not Found'

    const student1 = new Student(
      1,
      'Nazar',
      'Tymiv',
      'NazarTymiv',
      'hello1@gmail.com'
    )

    cohortList.createCohort('Cohort 1')
    cohortList.addStudent(student1, 'Cohort 1')

    expect(() => cohortList.removeStudent(1, 'Boolean')).toThrowError(expected)
    expect(cohortList.list[0].studentsList[0]).toEqual(student1)
  })
})
