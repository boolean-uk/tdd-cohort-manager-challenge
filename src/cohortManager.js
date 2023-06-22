class CohortManager {
  constructor() {
    this.cohortList = []
  }

  addCohort(cohortName) {
    const cohortObj = {
      cohortName: cohortName,
      students: []
    }
    this.cohortList.push(cohortObj)
    return true
  }

  searchCohort(cohortName) {
    if (this.cohortList.find((cohort) => cohort.cohortName === cohortName)) {
      console.log(
        'Cohort Search Results:',
        this.cohortList.find((cohort) => cohort.cohortName === cohortName)
      )
      return true
    } else {
      console.error('Cohort does not exist')
      return false
    }
  }

  addStudent(cohortName, studentInfo) {
    if (this.cohortList.find((cohort) => cohort.cohortName === cohortName)) {
      const cohortData = this.cohortList.find(
        (cohort) => cohort.cohortName === cohortName
      )
      const indexOfCohort = this.cohortList.indexOf(cohortData)
      this.cohortList[indexOfCohort].students.push(studentInfo)
      return true
    }
  }

  removeCohort(cohortName) {
    if (this.cohortList.find((cohort) => cohort.cohortName === cohortName)) {
      const cohortData = this.cohortList.find(
        (cohort) => cohort.cohortName === cohortName
      )
      const indexOfCohort = this.cohortList.indexOf(cohortData)
      this.cohortList.splice(indexOfCohort, 1)
      return true
    } else {
      console.error('Unable to Delete Cohort, Cohort does not exist')
      return false
    }
  }

  // removeStudent(cohortName)
}

module.exports = CohortManager
