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
  searchCohortByName(cohortName) {
    let cohort
    for (let i = 0; i < this.cohorts.length; i++) {
      cohort = this.cohorts.find((el) => {
        return el.cohortName === cohortName
      })
    }

    if (!cohort) throw new Error('A cohort with this name does NOT exist')

    return cohort
  }

  // QUESTION 3 => DOMAIN MODEL
  // Add student to a specific cohort
  // USER STORY =>
  // - As an admin at boolean
  // - So I can link a student to a cohort
  // - I'd like to add a student to a specific cohort

  // DOMAIN MODEL
  // - Methods => addStudentToCohort(studentData, cohortName)
  // - Inputs => studentData@Strings, cohortName
  // - Data => studentData@Strings, Properties: studentID@Number, firstname@String, lastname@String, gitusername@String, email@String, conhortName@String
  // - Scenario => If admin creates student and add to cohort
  // - Outputs => cohort(@object)
  addStudentToCohort(firstname, lastname, gitusername, email, cohortName) {
    this.studentID++
    const student = {
      studentID: this.studentID,
      firstname,
      lastname,
      gitusername,
      email
    }

    const cohort = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!cohort) throw new Error('Cohort does not exist')
    cohort.students.push(student)
    return cohort
  }

  // QUESTION 4 => DOMAIN MODEL
  // Remove a cohort by cohort name
  // USER STORY =>
  // - As an admin at boolean
  // - So I update the record
  // - I'd like to remove a cohort by cohort name

  // DOMAIN MODEL
  // - Methods => removeChortByName(cohortName)
  // - Inputs => cohortName
  // - Data => cohortName(@String)
  // - Scenario => If admin removes a cohort
  // - Outputs => cohort(@object) is removed
  removeCohortByName(cohortName) {
    const result = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )
    const cohortIndex = this.cohorts.indexOf(result)
    this.cohorts.splice(cohortIndex, 1)
    return this.cohorts
  }

  getAllCohorts() {
    const total = this.cohorts.length
    return total
  }

  // QUESTION 5 => DOMAIN MODEL
  // Remove student from a specific cohort
  // USER STORY =>
  // - As an admin at boolean
  // - So I update the record
  // - I'd like to remove students from a specific cohort

  // DOMAIN MODEL
  // - Methods => removeStudentFromCohort(studentID, cohortName)
  // - Inputs => studentID, cohortName
  // - Data => studentID(@Number), cohortName(@String)
  // - Scenario => If admin provides a studentID & cohort name
  // - Outputs => student(@object) is removed from cohort@Object
  removeStudentFromCohort(cohortName, studentID) {
    const cohort = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!cohort) throw new Error('Cohort does not exist')

    const cohortStudnet = cohort.students.find(
      (student) => student.studentID === studentID
    )
    if (!cohortStudnet) throw new Error('Student does not exist')

    const studIndex = cohort.students.indexOf(cohortStudnet)
    const removeStud = cohort.students.splice(studIndex, 1)[0]
    return removeStud
  }
}

// export default CohortManager
module.exports = CohortManager
