import Student from './student.js'
import Cohort from './cohorts.js'
import students from './studentsDB.js'

class CohortManager {
  constructor() {
    this.cohortsList = []
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    const allreadyCreated = this.cohortsList.find((co) => co.name === name)
    if (allreadyCreated) {
      console.log('A cohort with this name already exists\n')
      throw new Error('A cohort with this name already exists\n')
    } else this.cohortsList.push(newCohort)
  }

  removeCohort(name) {
    const cohortToRemove = this.cohortsList.findIndex((co) => co.name === name)
    if (cohortToRemove !== -1) {
      this.cohortsList.splice(cohortToRemove, 1)
    } else {
      console.log('No cohort with this name\n')
      throw new Error('No cohort with this name\n')
    }
  }

  findCohort(name) {
    const found = this.cohortsList.find((co) => co.name === name)
    if (found) {
      console.log(`You searched for Cohort ${name}\n`)
      console.log(JSON.stringify(found, null, 2) + '\n')
      return found
    } else {
      console.log('No cohort with this name\n')
      throw new Error('No cohort with this name\n')
    }
  }

  addStudentToCohort(stdId, cohort) {
    const studentToAdd = students.find((std) => std.id === stdId)
    const receivingCohort = this.cohortsList.find((co) => co.name === cohort)
    const alreadyInACohort = this.cohortsList.some((co) =>
      co.studentExists(studentToAdd.firstName, studentToAdd.lastName)
    )
    if (studentToAdd && receivingCohort && alreadyInACohort !== true) {
      receivingCohort.addStudent(studentToAdd.firstName, studentToAdd.lastName)
    } else if (!receivingCohort) {
      console.log(`Cohort ${cohort} does not exist`)
      throw new Error(`Cohort ${cohort} does not exist`)
    }
  }

  removeStudentFromCohort(stdId, cohort) {
    const cohortToUse = this.cohortsList.find((co) => co.name === cohort)
    const studentToRemove = cohortToUse.studentsList.find(
      (std) => std.id === stdId
    )
    if (studentToRemove && cohortToUse) {
      cohortToUse.removeStudent(
        studentToRemove.firstName,
        studentToRemove.lastName
      )
    }
  }

  findStudentInAllCohorts(stdId) {}
}
export default CohortManager

// const nm = new CohortManager()
// nm.createCohort(1)
// nm.createCohort(2)
// nm.createCohort(2)
// // // nm.findCohort(1)
// nm.addStudentToCohort(1, 1)
// nm.addStudentToCohort(1, 1)
// console.log(nm)
// console.log(nm.cohortsList[0]);
// nm.removeStudentFromCohort(1, 1)
// nm.removeStudentFromCohort(1, 1)

// console.log(nm)
