const CohortList = require('../src/cohortManager.js')

describe('Cohort List: ', () => {
  let cohortList
  beforeEach(() => {
    cohortList = new CohortList()
  })

  it('Creates a new cohort with a name', () => {
    // GIVEN
    const cohort = {
      cohortName: 'Cohort2',
      students: []
    }
    // const cohort2 = {
    //   cohortName: 'Cohort2',
    //   students: []
    // }

    // WHEN
    const newCohort = cohortList.createCohort(cohort)
    // cohortList.createCohort(cohort2)

    // THEN
    expect(newCohort).toEqual(cohort)
  })
  // it('Adds a student to a specific cohort', () => {
  //   const student = {
  //     studentID: 1,
  //     firstname: 'Isa',
  //     lastname: 'Tartarelli',
  //     githubusername: 'Shylan21',
  //     email: 'isabel.tartarelli@live.it'
  //   }

  //   const cohortList = new CohortList()
  //   cohortList.addNewStudent(student)
  //   const addStudent = cohortList.includes(student)
  //   expect(addStudent).toEqual(cohortList)
  // })
})
