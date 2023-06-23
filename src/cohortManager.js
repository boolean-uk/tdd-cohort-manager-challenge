class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = {
      name: name, // Can also be written as 'name,'
      students: []
    }
    this.cohorts.push(newCohort)
    return newCohort
  }

  // Returns the index/position of the cohort requested by 'name'
  findCohort(name) {
    const result = this.cohorts.findIndex((cohort) => {
      return cohort.name === name
    })
    if (result < 0) {
      throw new Error('Cohort not found!')
    }
    return result
  }

  findStudent(firstname) {
    for (const cohort of this.cohorts) {
      const result = cohort.students.find(
        (student) => student.firstname === firstname
      )
      if (result) {
        return result
      }
    }
    throw new Error('Student not found!')
  }

  addStudent(student, cohortName) {
    const index = this.findCohort(cohortName)
    this.cohorts[index].students.push(student)
  }

  removeCohort(name) {
    if (this.findCohort(name) >= 0) {
      const filteredCohorts = this.cohorts.filter(
        (cohort) => cohort.name !== name.name
      )
      this.cohorts = filteredCohorts
    }
  }

  removeStudent(student, name) {
    const cohortIndex = this.findCohort(name)
    const cohort = this.cohorts[cohortIndex]

    cohort.students = cohort.students.filter(
      (s) => s.studentID !== student.studentID
    )
  }
}

module.exports = CohortManager
