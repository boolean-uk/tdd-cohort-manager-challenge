// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE
import CohortManager, { Cohort, Student } from '../src/DELETEME.js'
describe("CohortManger", () => {
  let cohortManager
  let student

  beforeEach(() => {
    cohortManager = new CohortManager()
    student = new Student
  })

  it("should exist", () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
    expect(student).toBeInstanceOf(Student)
  })

  it("should create a new cohort", () => {
    const result = cohortManager.createCohort('cohort 12')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.id).toBe(1)
    expect(result.cohortName).toBe('cohort 12')

  })

  it("should create multiple cohorts with incrementing id", () => {
    const result2 = cohortManager.createCohort('cohort 13')
    const result3 = cohortManager.createCohort('cohort 14')

    expect(result2).toBeInstanceOf(Cohort)
    expect(result2.id).toBe(1)
    expect(result2.cohortName).toBe('cohort 13')

    expect(result3).toBeInstanceOf(Cohort)
    expect(result3.id).toBe(2)
    expect(result3.cohortName).toBe('cohort 14')

    expect(cohortManager.cohorts.length).toBe(2)
  })

  it("should search a cohort by name", () => {
    const studentTest = new Student('Luca', 'Terrazzan', 'luca', 'terrazzan@gmail.com')
    const studentTest2 = new Student('morphil', 'bach', 'morfilbach', 'bach@gmail.com')
    const cohort12 = cohortManager.createCohort('cohort 12')
    const cohort13 = cohortManager.createCohort('cohort 13')
    cohortManager.addStudentsToCohort('cohort 12', studentTest)
    cohortManager.addStudentsToCohort('cohort 13', studentTest2)

    const result1 = cohortManager.searchCohort('cohort 12')
    const result2 = cohortManager.searchCohort('cohort 13')

    expect(result1).toBeInstanceOf(Cohort)
    expect(result1.id).toBe(1)
    expect(result1.cohortName).toBe('cohort 12')
    expect(result1.students.length).toBe(1)
    expect(result1.students[0].firstName).toBe('Luca')

    expect(result2).toBeInstanceOf(Cohort)
    expect(result2.id).toBe(2)
    expect(result2.cohortName).toBe('cohort 13')
    expect(result2.students.length).toBe(1)
    expect(result2.students[0].firstName).toBe('morphil')
    expect(result2.students[0].githubUsername).toBe('morfilbach')
  })

  it("should throw an error if cohort not found", () => {
    expect(() => cohortManager.searchCohort('non-existent')).toThrow('cohort not found')
  })

  it("should add a student to a given cohort", () => {
    const cohort12 = cohortManager.createCohort('cohort 12')
    const student1 = new Student('morphil', 'bach', 'morfilbach', 'bach@gmail.com')
    const student2 = new Student('smth', 'smthlastname', 'smthuser', 'smth@gmail.com')
    cohortManager.addStudentsToCohort('cohort 12', student1)

    cohortManager.addStudentsToCohort('cohort 12', student2)

    expect(cohort12.students.length).toBe(2)
    expect(cohort12.students).toContain(student1)
    expect(cohort12.students[0].firstName).toBe('morphil')
    expect(cohort12.students[1].githubUsername).toBe('smthuser')
  })
})
