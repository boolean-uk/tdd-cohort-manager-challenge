class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.cohorts = []
  }

  addStudent(student) {
    this.students.push(student)
    return true
  }

  addCohort(cohortName) {
    const cohort = { name: cohortName, students: [] }
    this.cohorts.push(cohort)
    return cohort
  }

  removeStudent(studentId) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].studentId === studentId) {
        this.students.splice(i, 1)
        return true
      }
    }
    return false
  }
}

module.exports = Cohort
