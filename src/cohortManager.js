import Cohort from './cohort.js'
import Student from './student.js'

class CohortManager {
  constructor() {
    this.cohorts = []
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
        cohort.students.length + 1,
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
}

const c = new CohortManager()

c.createCohort('cohort-11')
c.createCohort('cohort-10')
console.log(
  c.addStudentToCohort(
    {
      firstName: 'Kye',
      lastName: 'Yee',
      github: '@yee0802',
      email: 'ky@mail.com'
    },
    'cohort-11'
  )
)
console.log(c.removeCohortByName('cohort-10'))

export default CohortManager
