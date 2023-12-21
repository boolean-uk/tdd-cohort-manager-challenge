import Cohort from './cohort.js'
import { Student } from './student.js'

let countID = 1

class CohortManager {
  constructor() {
    this.cohortList = []
    this.allStudents = []
  }

  createCohort(name) {
    if (name.length === 0) throw new Error('Cohort needs a name!')
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)
    return cohort
  }

  removeCohort(name) {
    if (name.length === 0) throw new Error('Please enter a cohort name')
    const foundCohort = this.findCohort(name)
    return (this.cohortList = this.cohortList.filter(
      (item) => item.name !== foundCohort.name
    ))
  }

  findCohort(name) {
    const foundCohort = this.cohortList.find((cohort) => cohort.name === name)
    if (!foundCohort) throw new Error('No cohort found with that name')
    return foundCohort
  }

  createStudent(firstName, lastName, gitHub, email) {
    const student = new Student(firstName, lastName, gitHub, email)
    this.allStudents.push(student)
    countID += 1
    return student
  }
}

export { CohortManager, countID }
