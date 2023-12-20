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
    const foundStudent = studentManager.list.find(
      (student) => student.id === studentId
    )
    if (!foundStudent) {
      throw new Error('student not found')
    }
    this.students.push(foundStudent)
    return this.students
  }
}

export { Cohort }
