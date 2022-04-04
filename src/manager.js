const Cohort = require('./cohort')

class Manager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  removeCohortByName(cohortName) {
    if (!cohortName) throw new Error(`Must pass a cohortName to function`)
    const cohortsByName = []
    for (let j = 0; j < this.cohorts.length; j++) {
      cohortsByName.push(this.cohorts[j].cohortName)
    }
    if (cohortsByName.includes(cohortName)) {
      for (let j = 0; j < this.cohorts.length; j++) {
        if (this.cohorts[j].cohortName === cohortName) {
          this.cohorts.splice(j, 1)
        }
      }
      return this.cohorts
    }
    if (!cohortsByName.includes(cohortName)) {
      throw new Error(`No such cohort`)
    }
  }

  createUniqueId(gitHub, cohortName) {
    return `${gitHub}_${cohortName.slice(-5)}`
  }

  addStudentCohortUniqueId(firstName, lastName, gitHub, cohortName) {
    const uniqueId = this.createUniqueId(gitHub, cohortName)

    let addedCohorts = null
    this.cohorts.forEach((cohort, i) => {
      if (cohortName === cohort.cohortName) {
        cohort.addStudentToCohort(firstName, lastName, gitHub, uniqueId)
        addedCohorts = cohort
      }
    })
    if (addedCohorts === null) {
      throw new Error(`Not found`)
    }

    return addedCohorts
  }

  removeStudentByUniqueId(uniqueStudentId, cohortName) {
    let splicedCohort = null

    this.cohorts.forEach((cohort) => {
      if (cohortName === cohort.cohortName) {
        cohort.students.forEach((student, i) => {
          if (cohort.students[i].uniqueId === uniqueStudentId) {
            cohort.students.splice(i, 1)

            splicedCohort = this.cohorts
          }
        })
      }
      if (splicedCohort == null) {
        throw new Error('Enter valid data')
      }
      return this.cohorts
    })
  }

  findStudentById(id) {
    let student = false
    this.cohorts.forEach((cohort, i) => {
      if (cohort.students[i].uniqueId === id) {
        console.log(cohort.students[i].fullName)
        student = cohort.students[i].fullName
      }
      if (student) {
        return student
      }
    })
    return student
  }

  // for testing
  allStudentsInAllCohorts() {
    const allStudents = []
    this.cohorts.forEach((cohort) => {
      for (const object of cohort.students) {
        allStudents.push(object.fullName)
      }
    })
    return allStudents
  }

  // for testing
  getUniqueIdsOfEveryStudentInAllCohorts() {
    const uniqueId = []

    for (let j = 0; j < this.cohorts.length; j++) {
      for (const object of this.cohorts[j].students) {
        uniqueId.push(object.uniqueId)
      }
    }

    return uniqueId
  }

  // for testing
  cohortObjectCheckIdsAddedToStudentObject() {
    const uniqueIds = []
    this.cohorts.forEach((cohort) => {
      cohort.students.forEach((student, i) => {
        uniqueIds.push(student.uniqueStudentId)
      })
    })
    console.log('99....', uniqueIds)
    return uniqueIds
  }

  // using filter and find

  getCohort(cohortName) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)
    if (cohort) return cohort
    return false
  }

  removeCohort(cohortName) {
    const cohortToRemove = this.getCohort(cohortName)
    if (cohortToRemove) {
      this.cohorts = this.cohorts.filter(
        (cohort) => cohort.name !== cohortToRemove.name
      )
      return cohortToRemove
    }

    return 'Error: Cohort not found.'
  }

  getStudent(studentID) {
    for (const cohort of this.cohorts) {
      const student = cohort.students.find((el) => el.id === studentID)
      if (student) return student
    }
  }
}
module.exports = Manager
