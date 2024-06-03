import 'jasmine-expect'
import Cohort from './Cohort.js'
import findDuplicateStudent from './functions/findDuplicateStudent.js'
import Student from './Student.js'

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    if (!name) {
      throw new Error('All cohorts require a name')
    }

    const duplicateCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (!duplicateCohort) {
      const cohort = new Cohort(name)
      this.cohorts.push(cohort)
    } else {
      throw new Error('A cohort already exists with that name')
    }
  }

  findCohort(name) {
    const duplicateCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (duplicateCohort) {
      return duplicateCohort
    } else {
      throw new Error('No cohort found with that name')
    }
  }

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    if (
      findDuplicateStudent(
        firstName,
        lastName,
        githubUsername,
        email,
        this.cohorts
      )
    ) {
      throw new Error('This student already exists')
    }

    if (this.findCohort(cohortName).students.length > 23) {
      throw new Error('No more than 24 students per cohort')
    }
    const targetCohort = this.findCohort(cohortName)
    if (targetCohort) {
      const studentToAdd = new Student(firstName, lastName, githubUsername, email)
      targetCohort.students.push(studentToAdd)
      return studentToAdd
    } else {
      throw new Error('No cohort found with that name')
    }
  }

  removeCohort(cohortName) {
    const cohortToRemove = this.findCohort(cohortName)
    if (cohortToRemove) {
      const index = this.cohorts.indexOf(cohortToRemove)
      this.cohorts.splice(index, 1)
    } else {
      throw new Error('No cohort found with that name')
    }
    return cohortToRemove
  }

  removeStudent(cohortName, firstName, lastName) {
    const targetCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    if (targetCohort) {
      const targetStudent = targetCohort.students.find(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )
      if (targetStudent) {
        const index = targetCohort.students.indexOf(targetStudent)
        targetCohort.students.splice(index, 1)
        return targetStudent
      } else {
        throw new Error('No student with that name in this cohort')
      }
    } else {
      throw new Error('No cohort found with that name')
    }
    
  }

  findStudentById(studentIdToFind) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const targetStudent = this.cohorts[i].students.find(
        (student) => student.studentId === studentIdToFind
      )
      if (targetStudent) {
        return targetStudent
      }
    }
    throw new Error('No student found with that ID')
  }

  findStudentByName(name) {
    const foundStudents = []
    this.cohorts.forEach((cohort) =>
      cohort.students.forEach((student) => {
        if (
          student.firstName.includes(name) ||
          student.lastName.includes(name)
        ) {
          foundStudents.push(student)
        }
      })
    )
    if (foundStudents.length === 0) {
      throw new Error('No students found')
    }
    return foundStudents
  }
}

export default CohortManager
