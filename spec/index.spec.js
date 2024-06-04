import { Student, Cohortmanager, Cohort } from '../src/index.js'

describe('CohortsManager', () => {
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
    cohortmanager.create('cohort 12')
    cohortmanager.create('cohort 1')
    const result = cohortmanager.search('cohort 12')
    const result2 = cohortmanager.search('test')
    const result3 = cohortmanager.search('cohort 1')

    expect(result.cName).toBe(`cohort 12`)
    expect(result2).toBe(false)
    expect(result3.id).toBe(2)
  })

  it('should remove the cohort', () => {
    cohortmanager.create('cohort 12')
    cohortmanager.create('cohort 1')

    expect(() => cohortmanager.remove('cohort 2')).toThrowError(
      'cohort not found!'
    )
    expect(cohortmanager.cohorts.length).toBe(2)

    const result2 = cohortmanager.remove('cohort 12')

    expect(result2[0].cName).toBe('cohort 1')
    expect(cohortmanager.cohorts.length).toBe(1)
  })
})

describe('Cohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('should exist', () => {
    expect(cohort).toBeInstanceOf(Cohort)
  })

  it('should add new student to cohort', () => {
    cohort.addStudent('Farshad', 'Bagdeli', 'FBagdeli', 'fbagdeli13@gmail.com')

    expect(cohort.studentsList.length).toBe(1)
    expect(cohort.studentsList[0].fName).toBe('Farshad')

    cohort.addStudent('web', 'dev', 'wd', 'wd@gmail.com')
    expect(expect(cohort.studentsList.length).toBe(2))
    expect(cohort.studentsList[1].email).toBe('wd@gmail.com')
    expect(cohort.studentsList[1].id).toBe(2)

    const cohortmanager = new Cohortmanager()
    const cohort12 = cohortmanager.create('cohort 12')
    cohort12.addStudent(
      'Farshad',
      'Bagdeli',
      'FBagdeli',
      'fbagdeli13@gmail.com'
    )

    expect(cohort12.studentsList.length).toBe(1)
  })
})

describe('Student', () => {
  let student

  beforeEach(() => {
    student = new Student()
  })
  it('should have a id, fName, lName, git hub and email', () => {
    
  })
})