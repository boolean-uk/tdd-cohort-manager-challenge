import Cohort from './Cohort.js'

class CohortList {
  constructor() {
    this.list = []
  }

  // Create Cohort
  createCohort(name) {
    if (name.length === 0) throw new Error('Enter name for create new cohort')

    const cohort = new Cohort(this.list.length + 1, name)

    this.list.push(cohort)

    return cohort
  }

  // Find Cohort By Name
  getCohortByName(name) {
    const findCohort = this.list.find((item) => item.name === name) || null

    if (!findCohort) {
      throw new Error('Cohort not Found')
    }

    return findCohort
  }

  // Add student
  addStudent(student, cohortName) {
    const findCohort = this.getCohortByName(cohortName)

    findCohort.studentsList.push(student)

    return findCohort.studentsList
  }

  // Remove Cohort
  removeCohort(name) {
    const findCohort = this.getCohortByName(name)

    this.list = this.list.filter((item) => item.name !== name)

    return findCohort
  }

  // Remove Student
  removeStudent(studentId, cohortName) {
    const findCohort = this.getCohortByName(cohortName)
    const findStudent = findCohort.studentsList.find(
      (item) => item.studentId === studentId
    )

    if (!findStudent) {
      throw new Error('Student not Found')
    }

    findCohort.studentsList = findCohort.studentsList.filter(
      (item) => item.studentId !== studentId
    )

    return findStudent
  }
}

export default CohortList
