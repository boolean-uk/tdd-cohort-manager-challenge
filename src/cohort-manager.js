const Cohort = require('./cohort.js')

class CohortManager {
  constructor () {
    this.cohorts = []
    this.studentID = 1
  }

  addCohort (cohortName) {
      if (this.cohortFinder(cohortName).length > 0) {
        return 'There is already a cohort with the same name'
      }

    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  removeCohort (cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      if (cohort.checkCohortName(cohortName)) {
        this.cohorts.splice(i, 1)
        return 'Removed'
      }
    }
    return 'Cohort does not exist'
  }

  addStudent (cohortName, first, last, github, email) {
    // check all students to see if exist in data base. if so return error message and do not add
    const cohort = this.cohortFinder(cohortName)
    const cohortInstance = cohort[0]

    if (cohort.length === 0) {
      return 'Cohort does not exist'
    }

     if (cohortInstance.students.length >= 24) {
          return 'Cohort is full'
        }
        
    cohortInstance.addStudentToCohort(this.studentID, first, last, github, email)
    this.studentID += 1
    return 'Student Added'

    // for(let i = 0; i < this.cohorts.length; i++) {
    //     let cohort = this.cohorts[i]
    //     if(cohort.checkCohortName(cohortName)) {
    //         if(cohort.students.length >= 24) {
    //             return "Cohort is full"
    //         }
    //         cohort.addStudentToCohort(this.studentID, first, last, github, email)
    //         this.studentID += 1
    //         return "Student Added"
    //     }
    // }
    // return "Cohort does not exist"

  }

  removeStudent (cohortName, id) {
    const cohort = this.cohortFinder(cohortName)
    const cohortInstance = cohort[0]

    if (cohort.length === 0) {
      return 'Cohort does not exist'
    }

        for (let j = 0; j < cohortInstance.students.length; j++) {
          const student = cohortInstance.students[j]
          if (student.checkID(id)) {
            cohortInstance.removeStudentFromCohort(id)
            return 'Student Removed'
          }
        }

    return 'Student ID not found'
  }

  cohortFinder(cohortName) {
      return this.cohorts.filter(cohort => cohort.checkCohortName(cohortName))
  }

  searchByCohort(cohortName) {
    return this.cohortFinder(cohortName).length > 0
    ? this.cohorts.filter(cohort => cohort.checkCohortName(cohortName))[0]
    : 'Cohort does not exist'
}

  searchByProperty (property, value) {
    const studentsWithThisProperty = []

    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      for (let j = 0; j < cohort.students.length; j++) {
        const student = cohort.students[j]
        if (student[property] === value) {
          studentsWithThisProperty.push(student)
        }
      }
    }
    return studentsWithThisProperty
  }

  searchByID(id) {
    return this.searchByProperty('id', id).length > 0
      ? this.searchByProperty('id', id)[0]
      : 'Student ID not found'
  }

  searchStudentsByFirstname(first) {
    return this.searchByProperty('firstname', first)
  }

  searchStudentsByLastname (last) {
    return this.searchByProperty('lastname', last)
  }
}

module.exports = CohortManager
