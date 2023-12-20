import Cohort from './cohort.js'
import Student from './student.js'

class CohortManager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error("please input a valid name e.g. 'cohort-11'")
    }

    const duplicate = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (!duplicate) {
      const cohort = new Cohort(cohortName)
      this.cohorts.push(cohort)

      return this.cohorts.find((cohort) => cohort.name === cohortName)
    } else {
      return `${cohortName} already exists`
    }
  }

  findCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error("please input a valid name e.g. 'cohort-11'")
    }

    const hasCohort = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (hasCohort) {
      return this.cohorts.find((cohort) => cohort.name === cohortName)
    } else {
      throw new Error('Cohort does not exist')
    }
  }

  addStudentToCohort(student, cohortName) {
    if (typeof cohortName !== 'string' || typeof student !== 'object') {
      throw new Error(
        "please input a valid studentID & cohort name e.g. (1, 'cohort-11')"
      )
    }

    if (
      !student.firstName ||
      !student.lastName ||
      !student.github ||
      !student.email
    ) {
      throw new Error(
        "Please input a valid student e.g. {firstName: 'John', lastName: 'Doe', github: '@johndoe', email:'johndoe@mail.com'}"
      )
    }

    const hasCohort = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (hasCohort) {
      const cohort = this.findCohort(cohortName)
      const studentToAdd = new Student(
        this.id++,
        student.firstName,
        student.lastName,
        student.github,
        student.email
      )

      cohort.students.push(studentToAdd)

      return cohort.students
    } else {
      throw new Error('Cohort does not exist')
    }
  }

  removeCohortByName(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error("please input a valid name e.g. 'cohort-11'")
    }

    const hasCohort = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (hasCohort) {
      const cohortToRemove = this.findCohort(cohortName)

      this.cohorts = this.cohorts.filter((cohort) => cohort !== cohortToRemove)

      return `${cohortName} removed successfully`
    } else {
      throw new Error('Cohort does not exist')
    }
  }

  removeStudentFromCohort(studentId, cohortName) {
    if (typeof cohortName !== 'string' || typeof studentId !== 'number') {
      throw new Error(
        "please input a valid studentID & cohort name e.g. (3,'cohort-11')"
      )
    }

    const hasCohort = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (hasCohort) {
      const cohort = this.findCohort(cohortName)

      const student = cohort.students.find(
        (student) => student.id === studentId
      )

      if (student) {
        cohort.students = cohort.students.filter(
          (student) => student.id !== studentId
        )
      } else {
        throw new Error('Student does not exist')
      }

      return `${student.firstName} successfully removed from ${cohort.name}`
    } else {
      throw new Error('Cohort does not exist')
    }
  }
}

export default CohortManager
