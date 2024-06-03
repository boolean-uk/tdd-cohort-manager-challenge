import { Student, Cohortmanager } from '../src/index.js'

describe('cohortsManager', () => {
  let cohortmanager
  beforeEach(() => {
    cohortmanager = new Cohortmanager()
  })

  it('should exist', () => {
    expect(cohortmanager).toBeInstanceOf(Cohortmanager)
  })

  it('should create a new cohort and add it to cohortsManager', () => {
    const result = cohortmanager.creat('cohort 12')
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