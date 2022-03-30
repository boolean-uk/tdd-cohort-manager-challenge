class CohortManager {
  constructor() {
    this.studentList = []
    this.schoolCohorts = []
    this.cohortCapacity = 24
  }

  createStudent(student) {
    this.studentList.push(student)
  }

  createNStudents(num, student) {
    for (let i = 0; i < num; i++) {
      this.studentList.push(student)
    }
  }
}

module.exports = CohortManager
