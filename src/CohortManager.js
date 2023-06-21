class CohortManager {
  constructor() {
    this.cohorts = []
    this.newCohortID = 0
  }

  createCohort(cohortName) {
    if (this.cohorts.find((item) => item.name === cohortName)) {
      throw new Error('Cohort already exists')
    } else {
      this.newCohortID++
      const newCohort = { id: this.newCohortID, name: cohortName, students: [] }
      this.cohorts.push(newCohort)
    }
  }

  findCohortByName(cohortName) {
    const foundCohort = this.cohorts.find((item) => item.name === cohortName)
    if (foundCohort) {
      return foundCohort
    } else {
      throw new Error('Cohort doesnt exist')
    }
  }

  addStudentToCohort(studentName, cohortName) {
    const foundCohort = this.findCohortByName(cohortName)
    if (
      foundCohort.students.find(
        (item) => `${item.firstName} ${item.lastName}` === studentName
      )
    ) {
      throw new Error('Student is already in the cohort')
    }
    foundCohort.students.push(new Student(studentName))
    return true
  }
}

class Student {
  constructor(fullName, ghUsername = '', email = 'testEmail@email.com') {
    const splitName = fullName.split(' ')
    this.lastName = splitName.pop()
    this.firstName = splitName.join(' ')
  }
}

module.exports = { CohortManager }
