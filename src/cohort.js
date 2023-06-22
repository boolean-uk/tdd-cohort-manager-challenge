class Cohorts {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudent(student) {
    if (student !== null) {
      this.students.push(student)
      return true
    }
    return false
  }

  removeStudent(targetStudent) {
    const removeIndex = this.students.findIndex(
      (student) => student === targetStudent
    )
    if (removeIndex === -1) return 'Student not in specified Cohort'
    targetStudent.inCohort = false
    this.students.splice(removeIndex, 1)
  }
}

module.exports = Cohorts
