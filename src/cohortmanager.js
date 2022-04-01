const Cohort = require('../src/cohort')

class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createNewCohort(cohortName, cohortCapacity) {
    if (!cohortName) return 'Err: please provide cohort name'

    if (this.cohortExists(cohortName)) return `Err: cohort already exists`

    const newCohort = new Cohort(cohortName, cohortCapacity)
    this.cohortList.push(newCohort)

    return `New Cohort (${cohortName}) created.`
  }

  removeCohort(cohortName) {
    if (!this.cohortExists(cohortName)) return `Err: cohort doesnt exist`

    const indexOfCohort = this.cohortList.findIndex(
      (cohort) => cohort.name === cohortName
    )

    this.cohortList.splice(indexOfCohort, 1)

    return this.cohortList
  }

  searchByCohortName(searchedCohortName) {
    return this.cohortList.find((cohort) => cohort.name === searchedCohortName)
  }

  addStudentToCohort(studentObj, cohortName) {
    if (!this.cohortExists(cohortName)) return `Err: cohort doesnt exist`

    // if (this.studentExistsInOtherCohort(studentObj))
    //   return `Err: student exists in other cohort.`

    const cohort = this.searchByCohortName(cohortName)

    return cohort.addStudent(studentObj)
  }

  removeStudentFromCohort(studentEmail, cohortName) {
    if (!this.cohortExists(cohortName)) return `Err: cohort doesnt exist`

    const cohort = this.searchByCohortName(cohortName)

    return cohort.removeStudent(studentEmail)
  }

  searchByStudentEmail(email) {
    for (let i = 0; i < this.cohortList.length; i++) {
      const cohort = this.cohortList[i]
      if (cohort.hasStudent(email)) {
        return cohort.getStudent(email)
      }
    }
    return `Err: student not found`
  }

  cohortExists(cohortName) {
    return this.searchByCohortName(cohortName) !== undefined
  }

  // studentExistsInOtherCohort(studentObj) {
  //   for (let i = 0; i < this.cohortList.length; i++) {
  //     console.log(this.cohortList[i])
  //     if (this.cohortList[i].hasStudent(studentObj.email)) return true
  //   }

  //   return false
  // }
}

module.exports = CohortManager
