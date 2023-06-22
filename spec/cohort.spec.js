import { Cohort } from '../src/cohort.js'

describe('createCohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('creates a new cohort object with a cohortName property', () => {
    // GIVEN
    const cohortName = 'cohort_11'
    const cohortObject = {
      cohortName: cohortName,
      studentList: []
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
      cohortName: cohortName,
      studentList: []
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
      cohortName: 'cohort_14',
      studentList: []
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
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
    uniqueID = 1
  })

  it('creates a new student object with relevant properties assigned', () => {
    const newStudent = {
      studentID: 1,
      firstName: 'joe',
      lastName: 'bloggs',
      githubUsername: 'joebloggsGit',
      email: 'joe.bloggs@email.co'
    }
    const res = cohort.createStudent(
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
    cohort.createStudent(
      1,
      'joeseph',
      'bloggson',
      'joesephbloggsonGit',
      'joeseph.bloggson@email.co'
    )
    const res = cohort.createStudent(
      2,
      'joey',
      'bloggsy',
      'joeybloggsyGit',
      'joey.bloggsy@email.co'
    )
    expect(res).toEqual(newStudent)
  })
})

describe('addStudentToCohort', () => {
  let cohort
  let uniqueID
  beforeEach(() => {
    cohort = new Cohort()
    uniqueID = 1
  })

  it('by ID, if student is not in cohort list add them to it', () => {
    const newStudent = {
      studentID: 1,
      firstName: 'joe',
      lastName: 'bloggs',
      githubUsername: 'joebloggsGit',
      email: 'joe.bloggs@email.co'
    }
    const newCohort = 'cohort_15'
    cohort.createCohort(newCohort)
    cohort.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    const res = cohort.addStudentToCohort(1, 'cohort_15')
    expect(res).toEqual([
      { cohortName: 'cohort_15', studentList: [newStudent] }
    ])
  })

  it('by ID, returns error message if student already assigned to cohort', () => {
    const newCohort = 'cohort_16'
    cohort.createCohort(newCohort)
    cohort.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    cohort.addStudentToCohort(1, 'cohort_16')
    const res = cohort.addStudentToCohort(1, 'cohort_16')
    expect(res).toEqual('student already in this cohort')
  })
})

describe('removeCohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('removes a cohort from the cohortList', () => {
    cohort.createCohort('cohort_17')
    const res = cohort.removeCohort('cohort_17')
    expect(res).toEqual([])
  })

  it('returns error message if cohort does not exist in cohortList', () => {
    cohort.createCohort('cohort_18')
    const res = cohort.removeCohort('cohort_19')
    expect(res).toEqual('cohort does not exist')
  })
})
