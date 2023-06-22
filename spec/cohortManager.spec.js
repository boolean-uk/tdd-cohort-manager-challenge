const CohortManager = require('../src/cohortManager.js')

describe('Cohort Manager: ', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should create a new cohort with a name', () => {
    // GIVEN
    const name = 'Cohort1'

    // WHEN
    const newCohort = cohortManager.createCohort(name)
    // THEN
    // console.log(cohortManager.cohorts)

    expect(newCohort.name).toEqual(name)
  })

  it('Should find a specific cohort by its name', () => {
    // GIVEN
    const name = 'Cohort1'

    // WHEN
    cohortManager.createCohort(name)
    const cohort = cohortManager.findCohort(name)
    // THEN
    // console.log(cohortManager.cohorts)

    expect(cohort).toBeGreaterThanOrEqual(0)
  })

  it('Should add a student to a specific cohort', () => {
    const student = {
      studentID: 1,
      firstname: 'Isa',
      lastname: 'Tartarelli',
      githubusername: 'Shylan21',
      email: 'isabel.tartarelli@live.it'
    }
    const name = 'Cohort1'

    cohortManager.createCohort(name)
    cohortManager.addStudent(student, name)
    const result = cohortManager.cohorts[0].students[0]
    // console.log(cohortManager.cohorts[0].students)
    expect(result).toEqual(student)
  })

  // fit('Should remove a Cohort by its name', () => {
  //   const name = 'Cohort1'

  //   cohortManager.createCohort(name)
  //   cohortManager.removeCohort(name)
  //   const result = cohortManager.cohorts.filter((x) => {
  //     return x.name === name.name
  //   })
  //   expect(result.length).toEqual(1)
  // })
})
