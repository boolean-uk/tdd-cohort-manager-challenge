const CohortManager = require('../src/cohortManager.js')

describe('createCohort', () => {
  let cm
  beforeEach(() => {
    cm = new CohortManager()
  })

  it('creates a new cohort object with a cohortName property', () => {
    const cohortName = 'cohort_01'
    const cohortObject = {
      cohortName: cohortName,
      studentList: []
    }
    const cohortList = [cohortObject]
    const res = cm.createCohort('cohort_01')
    expect(res).toEqual(cohortList)
  })

  it('does not create a cohort if the given name already exists', () => {
    cm.createCohort('cohort_01')
    const res = cm.createCohort('cohort_01')
    expect(res).toEqual('cohort already exists')
    expect(cm.cohortList.length).toEqual(1)
  })
})

describe('findCohort', () => {
  let cm
  beforeEach(() => {
    cm = new CohortManager()
  })

  it('if cohort exits, return cohort object', () => {
    const cohort14 = {
      cohortName: 'cohort_01',
      studentList: []
    }
    cm.createCohort('cohort_01')
    const res = cm.findCohort('cohort_01')
    expect(res).toEqual(cohort14)
  })

  it('if the cohort does not exist, return error message', () => {
    const res = cm.findCohort('cohort_XX')
    expect(res).toEqual('cohort does not exist')
  })
})

describe('findStudent', () => {
  let uniqueID
  let cm
  beforeEach(() => {
    cm = new CohortManager()
    uniqueID = 1
  })

  it('will return the student object matching the given studentID', () => {
    const newStudent = {
      studentID: 1,
      firstName: 'joe',
      lastName: 'bloggs',
      githubUsername: 'joebloggsGit',
      email: 'joe.bloggs@email.co'
    }
    cm.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    const res = cm.findStudent(1)
    expect(res).toEqual(newStudent)
  })

  it('will return error message is student does not exist', () => {
    const res = cm.findStudent(1)
    expect(res).toEqual('student does not exist')
  })
})

describe('createStudent', () => {
  let uniqueID
  let cm
  beforeEach(() => {
    cm = new CohortManager()
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
    const res = cm.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    expect(res).toEqual(newStudent)
  })

  it('creates another student, with a different studentID to the first', () => {
    const newStudent = {
      studentID: 2,
      firstName: 'joey',
      lastName: 'bloggsy',
      githubUsername: 'joeybloggsyGit',
      email: 'joey.bloggsy@email.co'
    }
    cm.createStudent(
      1,
      'joeseph',
      'bloggson',
      'joesephbloggsonGit',
      'joeseph.bloggson@email.co'
    )
    const res = cm.createStudent(
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
  let cm
  let uniqueID
  beforeEach(() => {
    cm = new CohortManager()
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
    const newCohort = 'cohort_01'
    cm.createCohort(newCohort)
    cm.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    const res = cm.addStudentToCohort(1, 'cohort_01')
    expect(res).toEqual([
      { cohortName: 'cohort_01', studentList: [newStudent] }
    ])
  })

  it('by ID, returns error message if student already assigned to that cohort', () => {
    const newCohort = 'cohort_01'
    cm.createCohort(newCohort)
    cm.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    cm.addStudentToCohort(1, 'cohort_01')
    const res = cm.addStudentToCohort(1, 'cohort_01')
    expect(res).toEqual('student already in this cohort')
  })
})

describe('removeCohort', () => {
  let cm
  beforeEach(() => {
    cm = new CohortManager()
  })

  it('removes a cohort from the cohortList', () => {
    cm.createCohort('cohort_01')
    const res = cm.removeCohort('cohort_01')
    expect(res).toEqual([])
  })

  it('returns error message if cohort does not exist in cohortList', () => {
    const res = cm.removeCohort('cohort_01')
    expect(res).toEqual('cohort does not exist')
  })
})

describe('removeStudent', () => {
  let cm
  let uniqueID
  beforeEach(() => {
    cm = new CohortManager()
    uniqueID = 1
  })

  it('remove student from cohorts student list', () => {
    cm.createCohort('cohort_01')
    cm.createStudent(
      uniqueID,
      'joe',
      'bloggs',
      'joebloggsGit',
      'joe.bloggs@email.co'
    )
    cm.addStudentToCohort(1, 'cohort_01')
    const res = cm.removeStudent(1, 'cohort_01')
    expect(res).toEqual({ cohortName: 'cohort_01', studentList: [] })
  })

  it('return error message if student does not exist for given cohort', () => {
    cm.createCohort('cohort_01')
    const res = cm.removeStudent(1, 'cohort_01')
    expect(res).toEqual('student does not exist in this cohort')
  })
})
