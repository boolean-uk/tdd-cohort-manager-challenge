class Cohort {
  constructor(cohortName, cohortManager) {
    if (!cohortName) {
      throw new Error('cohort could not be created - missing input')
    }
    if (!cohortManager.isNameNew(cohortName)) {
      throw new Error('cannot create cohort - this name is already taken')
    }
    this.cohortName = cohortName
    this.id = undefined
    this.students = []
    this.capacity = 24
    this.occupancy = 0
  }

  assignCohortNameToStudent(studentId, manager) {
    const foundStudent = manager.searchSchoolById(studentId)
    foundStudent.cohortName = this.cohortName
    return foundStudent
  }

  clearStudentCohortName(studentId, manager) {
    const foundStudent = manager.searchSchoolById(studentId)
    foundStudent.cohortName = undefined
    return foundStudent
  }

  addStudent(studentId, studentManager) {
    if (this.isFull()) {
      throw new Error('cannot add students - this cohort is full')
    }
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
    if (this.occupancy === 0) {
      throw new Error('no students to be removed - cohort empty')
    }
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
