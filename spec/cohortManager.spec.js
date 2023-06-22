const CohortManager = require('../src/cohortManager.js')

describe('Cohort Manager: ', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('Should create a new cohort with a name', () => {
    // GIVEN
    const name = 'Cohort1'
    // const name1 = 'Cohort2'
    // const name3 = 'Cohort3'

    const newCohort = cohortManager.createCohort(name)
    // const newCohort1 = cohortManager.createCohort(name1)
    // const newCohort3 = cohortManager.createCohort(name3)

    // console.log('Cohort List', cohortManager.cohorts)

    expect(newCohort.name).toEqual(name)
  })
  it('Should find a specific cohort by its name', () => {
    const name = 'Cohort1'

    cohortManager.createCohort(name)
    const cohort = cohortManager.findCohort(name)

    // console.log(cohortManager.cohorts)

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
    const name3 = 'Cohort3'
    cohortManager.createCohort(name3)
    cohortManager.addStudent(student, name3)
    cohortManager.addStudent(student2, name3)

    // console.log('Students in one cohort', cohortManager.cohorts[0].students)

    const result = cohortManager.cohorts[0].students[0]

    expect(result).toEqual(student)
  })
  it('Should remove a Cohort by its name', () => {
    const name = 'Cohort1'
    // const name1 = 'Cohort2'

    cohortManager.createCohort(name)
    cohortManager.removeCohort(name)
    // cohortManager.removeCohort(name1)

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

    // console.log(
    //   'Students left in the Cohort',
    //   cohortManager.cohorts[0].students
    // )

    const filterStudent = cohortManager.cohorts.find(
      (cohort) => cohort.name === name
    ).students
    expect(filterStudent).toEqual([student2])
  })
  it('Shoud throw an error if cant find a student', () => {
    const cohortName = 'Cohort1'
    const studentName = 'Isa'

    cohortManager.createCohort(cohortName)
    cohortManager.addStudent(studentName)
    const student = cohortManager.cohorts.students.findStudent(studentName)
    expect(student).toEqual(studentName)
  })
})
