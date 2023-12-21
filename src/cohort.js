class Cohort {
  constructor(cohortName) {
    if (!cohortName) {
      throw new Error('cohort could not be created - missing input')
    }
    this.cohortName = cohortName
    this.id = undefined
    this.students = []
    this.capacity = 24
    this.occupancy = 0
  }

  addStudent(studentId, studentManager) {
    const foundStudent = studentManager.searchSchoolById(studentId)
    this.students.push(foundStudent)
    this.increaseOccupancyByOne()
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
    this.decreaseOccupancyByOne()

    return this.students
  }

  increaseOccupancyByOne() {
    this.occupancy++
    return this.occupancy
  }

  decreaseOccupancyByOne() {
    this.occupancy--
    return this.occupancy
  }

  isFull() {
    if (this.occupancy > this.capacity) {
      throw new Error(
        'capacity exceeded - there should never be more than 24 students'
      )
    }
    return this.occupancy === this.capacity
  }
}

export { Cohort }
