const { CohortManager } = require('../src/CohortManager')

describe('CohortManager class', () => {
  let Manager
  beforeEach(() => {
    Manager = new CohortManager()
  })

  // isCohortNameUnique
  it('expects the createCohort() to return false because of a non unique name', () => {
    Manager.createCohort('Software')
    expect(Manager.createCohort('Software')).toBeFalse()
  })

  // isStudentEmailUnique
  it('expects the createStudent() to return false because of a non unique email', () => {
    Manager.createStudent('Luc', 'Sim', 'X@e.com', 'git')
    expect(Manager.createStudent('Pot', 'Bru', 'X@e.com', 'got')).toBeFalse()
  })

  //   isCohortFull && isStudentEmailUnique
  it('expects the cohort to not add any more students if at max capacity', () => {
    Manager.createCohort('Software')

    for (let i = 1; i <= 24; i++) {
      Manager.createStudent('Fir', 'Sec', `t${i}@e.com`, 'git')
      Manager.updateStudent(i, 1)
    }
    Manager.createStudent('Fir', 'Sec', 'c4@e.com', 'git') // 25
    expect(Manager.updateStudent(25, 1)).toBeFalse()
  })

  // searchCohortByID
  it('expects to have the Cohort returned when searched', () => {
    Manager.createCohort('Software')
    Manager.createCohort('Hardware')
    expect(Manager.searchCohortByID(2)).toEqual({
      cohortID: 2,
      name: 'Hardware',
      students: []
    })
    expect(Manager.searchCohortByID(3)).toBeFalse()
  })

  // searchStudentByID
  it('expects to have the student returned when searched', () => {
    Manager.createStudent('Luc', 'Sim', 'X@e.com', 'git')
    Manager.createStudent('Pot', 'Rob', 'Z@e.com', 'got')
    expect(Manager.searchStudentByID(2)).toEqual({
      studentID: 2,
      firstName: 'Pot',
      lastName: 'Rob',
      email: 'Z@e.com',
      githubUser: 'got',
      cohortID: null
    })
    expect(Manager.searchStudentByID(3)).toBeFalse()
  })

  // getUniqueCohortID
  it('expects to have a unique id everytime it creates new cohort', () => {
    Manager.createCohort('Software')
    expect(Manager.createCohort('Hardware')).toBeTrue()
    expect(Manager.cohorts[1].cohortID).toBe(2)
  })

  // getUniqueStudentID
  it('expects to have a unique id everytime it creates new student', () => {
    Manager.createStudent('Luc', 'Sim', 'l@e.com', 'git')
    expect(Manager.createStudent('Jos', 'Muc', 'p@e.com', 'got')).toBeTrue()
    expect(Manager.students[1].studentID).toBe(2)
  })

  // createCohort
  it('expects the cohort to be created', () => {
    expect(Manager.createCohort('Software')).toBeTrue()
    expect(Manager.cohorts).toHaveSize(1)
  })

  // createStudent
  it('expects the student to be created', () => {
    expect(Manager.createStudent('Luc', 'Sim', 'l@e.com', 'git')).toBeTrue()
    expect(Manager.students).toHaveSize(1)
  })

  // updateStudent
})
