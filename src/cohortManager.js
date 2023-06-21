// COHORT MANAGER DATA SHAPE
// cohorts[0].cohort = name1
// cohorts[0].students.[0].firstName = a
// const cohohorts = [
//   {
//     cohortName: 'Cohort 1',
//     students: [
//       {
//         studentID: 1,
//         firstname: 'a',
//         lastname: 'b',
//         gitusername: '@gitadesokan',
//         email: 'ade@gmail.com'
//       }
//     ]
//   },
//   {
//     cohortName: 'Chohort 2',
//     students: [
//       {
//         studentID: 1,
//         firstname: 'a',
//         lastname: 'b',
//         gitusername: '@gitadesokan',
//         email: 'ade@gmail.com'
//       }
//     ]
//   }
// ]

class CohortManager {
  constructor() {
    this.studentID = 0
    this.cohorts = []
  }

  // QUESTION 1 => DOMAIN MODEL
  // Create a cohort with a cohort name
  // USER STORY =>
  // - As an admin at boolean
  // - So I can start a new batch of student
  // - I'd like to create a new cohort

  // DOMAIN MODEL
  // - Methods => createNewCohort(cohortName)
  // - Inputs => cohortName
  // - Data => newCohort(@Object), Properties: cohortName(@String), students(@Array_Object)
  // - Scenario => If admin enters a new cohort name
  // - Outputs => newCohort(@object) is added to cohort manager

  createNewCohort(cohortName) {
    const newCohort = { cohortName: cohortName, students: [] }
    this.cohorts.push(newCohort)
    return newCohort
  }

  // QUESTION 2 => DOMAIN MODEL
  // Search for a cohort by cohort name
  // USER STORY =>
  // - As an admin at boolean
  // - So I check cohort details
  // - I'd like to search cohort by cohort name

  // DOMAIN MODEL
  // - Methods => searchChortByName(cohortName)
  // - Inputs => cohortName
  // - Data => cohortName(@String)
  // - Scenario => If admin searches for cohort by cohort name
  // - Outputs => cohort(@object) is returned
  searchChortByName(cohortName) {
    let cohort
    for (let i = 0; i < this.cohorts.length; i++) {
      cohort = this.cohorts.find((el) => {
        return el.cohortName === cohortName
      })
    }
    return cohort
  }
}

export default CohortManager

// const cohortManager = new CohortManager()
// cohortManager.createNewCohort('Cohort 1')
// cohortManager.createNewCohort('Cohort 2')

// console.log(cohortManager.cohorts)
// console.log(cohortManager.cohorts)

// const aa = cohortManager.searchChortByName('Cohort 1')
// console.log(aa)
