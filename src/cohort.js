class Cohort {
  constructor(cohortName) {
    if (!cohortName) {
      throw new Error('cohort could not be created - missing input')
    }
    this.cohortName = cohortName
    this.id = undefined
    this.students = []
  }

  addStudent(studentId, studentManager) {
    const foundStudent = studentManager.searchSchoolById(studentId)
    this.students.push(foundStudent)
    return this.students
  }

  searchCohortById(studentId) {
    const foundStudent = this.students.find(
      (student) => student.id === studentId
    )
    if (!foundStudent) {
      throw new Error('student not found')
    }
    return foundStudent
  }

  removeStudent(studentId) {
    const foundStudent = this.searchCohortById(studentId)
    const index = this.students.indexOf(foundStudent)
    this.students.splice(index, 1)

    return this.students
  }
}

export { Cohort }
