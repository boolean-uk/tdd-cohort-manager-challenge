import { Student, Cohortmanager, Cohort } from '../src/index.js'

describe('cohortsManager', () => {
  let cohortmanager
  beforeEach(() => {
    cohortmanager = new Cohortmanager()
  })

  it('should exist', () => {
    expect(cohortmanager).toBeInstanceOf(Cohortmanager)
  })

  it('should create a new cohort and add it to cohortsManager', () => {
    const result = cohortmanager.create('cohort 12')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.id).toBe(1)
    expect(result.cName).toBe('cohort 12')
    expect(result.studentsList).toEqual([])
  })

  it('should find the cohort', () => {
    const result = cohortmanager.search('cohort 12')
  })
})


describe('student', () => {
  let student

  beforeEach(() => {
    student = new Student()
  })
  it('should have a id, fName, lName, git hub and email', () => {
    
  })
})