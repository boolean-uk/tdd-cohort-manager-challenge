import { Cohort, Student } from '../src/cohort.js'

describe('createCohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('creates a new cohort object with a cohortName property', () => {
    // GIVEN
    const cohortName = 'cohort_11'
    const cohortObject = {
      cohortName: cohortName
    }
    const cohortList = [cohortObject]
    // WHEN
    const res = cohort.createCohort('cohort_11')
    // THEN
    expect(res).toEqual(cohortList)
  })

  it('creates a different cohort object with a cohortName property', () => {
    const cohortName = 'cohort_12'
    const cohortObject = {
      cohortName: cohortName
    }
    const cohortList = [cohortObject]
    const res = cohort.createCohort('cohort_12')
    expect(res).toEqual(cohortList)
  })

  it('does not create a cohort if the given name already exists', () => {
    cohort.createCohort('cohort_13')
    const res = cohort.createCohort('cohort_13')
    expect(res).toEqual('cohort already exists')
    expect(cohort.cohortList.length).toEqual(1)
  })
})

describe('findCohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('if cohort exits, return cohort object', () => {
    const cohort14 = {
      cohortName: 'cohort_14'
    }
    cohort.createCohort('cohort_14')
    const res = cohort.findCohort('cohort_14')
    expect(res).toEqual(cohort14)
  })

  it('if the cohort does not exist, return error message', () => {
    const res = cohort.findCohort('cohort_XX')
    expect(res).toEqual('cohort does not exist')
  })
})

describe('createStudent', () => {
  let uniqueID
  let student
  beforeEach(() => {
    uniqueID = 1
    student = new Student()
  })

  it('creates a new student object with relevant properties assigned', () => {
    const newStudent = {
      studentID: 1,
      firstName: 'joe',
      lastName: 'bloggs',
      githubUsername: 'joebloggsGit',
      email: 'joe.bloggs@email.co'
    }
    const res = student.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    expect(res).toEqual(newStudent)
  })

  it('creates another student, with a different studentID', () => {
    const newStudent = {
      studentID: 2,
      firstName: 'joey',
      lastName: 'bloggsy',
      githubUsername: 'joeybloggsyGit',
      email: 'joey.bloggsy@email.co'
    }
    student.createStudent(
      1,
      'joeseph',
      'bloggson',
      'joesephbloggsonGit',
      'joeseph.bloggson@email.co'
    )
    const res = student.createStudent(
      2,
      'joey',
      'bloggsy',
      'joeybloggsyGit',
      'joey.bloggsy@email.co'
    )
    expect(res).toEqual(newStudent)
  })
})
