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

  // isCohortFull && isStudentEmailUnique
  //   it('expects the cohort to not add any more students if at max capacity', () => {
  //     expect(Manager.createStudent('Fir', 'Sec', 'a0@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a1@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a2@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a3@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a4@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a5@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a6@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a7@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a8@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'a9@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b0@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b1@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b2@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b3@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b4@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b5@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b6@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b7@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b8@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'b9@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'c0@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'c1@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'c2@e.com', 'git')).toBeTrue()
  //     expect(Manager.createStudent('Fir', 'Sec', 'c3@e.com', 'git')).toBeTrue() // 24
  //     expect(Manager.createStudent('Fir', 'Sec', 'c4@e.com', 'git')).toBeFalse() // 25
  //   })

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
})
