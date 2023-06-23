const CohortManager = require('../src/cohortManager.js')

describe('Cohort Manager: ', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('Should create a new cohort with a name', () => {
    const name = 'Cohort1'
    const newCohort = cohortManager.createCohort(name)
    expect(newCohort.name).toEqual(name)
  })
  it('Should find a specific cohort by its name', () => {
    const name = 'Cohort1'

    cohortManager.createCohort(name)
    const cohort = cohortManager.findCohort(name)

    expect(cohort).toBeGreaterThanOrEqual(0)
  })
  it('Should add a student to a specific cohort', () => {
    const student = {
      studentID: 1,
      firstname: 'Isa',
      lastname: 'Tartarelli',
      githubusername: 'Shylan21',
      email: 'isabelle.tarta@live.com'
    }
    const student2 = {
      studentID: 2,
      firstname: 'I',
      lastname: 'T',
      githubusername: 'Shylan21',
      email: 'isabelle@live.co.uk'
    }
    const cohortName = 'Cohort3'
    cohortManager.createCohort(cohortName)
    cohortManager.addStudent(student, cohortName)
    cohortManager.addStudent(student2, cohortName)

    const result = cohortManager.cohorts[0].students[0]

    expect(result).toEqual(student)
  })
  it('Should remove a Cohort by its name', () => {
    const name = 'Cohort1'

    cohortManager.createCohort(name)
    cohortManager.removeCohort(name)

    const result = cohortManager.cohorts.filter((x) => {
      return x.name === name.name
    })
    expect(result.length).toEqual(0)
  })
  it('Should remove a student from a specific cohort', () => {
    const name = 'Cohort1'
    cohortManager.createCohort(name)

    const student = {
      studentID: 1,
      firstname: 'Isa',
      lastname: 'Tartarelli',
      githubusername: 'Shylan21',
      email: 'isabel.tartarelli@live.it'
    }

    const student2 = {
      studentID: 2,
      firstname: 'I',
      lastname: 'T',
      githubusername: 'Shylan21',
      email: 'isabelle@live.co.uk'
    }
    cohortManager.addStudent(student, name)
    cohortManager.addStudent(student2, name)
    cohortManager.removeStudent(student, name)

    const filterStudent = cohortManager.cohorts.find(
      (cohort) => cohort.name === name
    ).students
    expect(filterStudent).toEqual([student2])
  })
  it('Should throw an error if cant find a student', () => {
    cohortManager.createCohort('Cohort1')
    cohortManager.addStudent('Isa', 'Cohort1')
    cohortManager.addStudent('Dan', 'Cohort1') // ({firstname: firstname}, cohortName)

    // const student = cohortManager.findStudent('Mantas')
    expect(() => {
      cohortManager.findStudent('Kyle')
    }).toThrowError('Student not found!')
  })
})
