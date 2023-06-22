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

  removeStudent(cohortName, studentId) {
    console.log('Before student removal', this.cohortList)
    if (!this.cohortList.find((cohort) => cohort.cohortName === cohortName)) {
      return false
    }
    if (this.cohortList.find((cohort) => cohort.cohortName === cohortName)) {
      const cohortData = this.cohortList.find(
        (cohort) => cohort.cohortName === cohortName
      )
      const indexOfCohort = this.cohortList.indexOf(cohortData)
      const studentData = this.cohortList[indexOfCohort].students.find(
        (student) => student.studentId === studentId
      )
      if (studentData === undefined) {
        console.error('Error: Student Not Found')
        return false
      }
      const indexOfStudent =
        this.cohortList[indexOfCohort].students.indexOf(studentData)
      this.cohortList[indexOfCohort].students.splice(indexOfStudent, 1)
      console.log('After student removal', this.cohortList)
      return true
    } else {
      console.error('Error: Cohort Not Found')
      return false
    }
  }
}

module.exports = CohortManager
