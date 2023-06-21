class Cohort {
    constructor(cohortName) {
      this.cohortName = cohortName
      this.students = []
    }
  
    addStudent(student) {
      this.students.push(student)
      console.log(
        `Added student ${student.firstName} ${student.lastName} to ${this.cohortName}`
      )
    }
  
    removeStudent(studentID) {
      const index = this.students.findIndex(
        (student) => student.studentID === studentID
      )
      if (index !== -1) {
        const removedStudent = this.students.splice(index, 1)[0]
        console.log(
          `Removed student ${removedStudent.firstName} ${removedStudent.lastName} from ${this.cohortName}`
        )
      } else {
        throw new Error('Student not found')
      }
    }
  }
  
  class Student {
    constructor(studentID, firstName, lastName, githubUsername, email) {
      this.studentID = studentID
      this.firstName = firstName
      this.lastName = lastName
      this.githubUsername = githubUsername
      this.email = email
    }
  }
  
  class CohortManager {
    constructor() {
      this.cohorts = []
    }
  
    createCohort(cohortName) {
      const existingCohort = this.getCohortByName(cohortName)
      if (existingCohort) {
        throw new Error('Cohort already exists')
      }
  
      const cohort = new Cohort(cohortName)
      this.cohorts.push(cohort)
      console.log(`Created cohort ${cohortName}`)
      return cohort
    }
  
    getCohortByName(cohortName) {
      const cohort = this.cohorts.find(
        (cohort) => cohort.cohortName === cohortName
      )
      if (cohort) {
        console.log(`Found cohort ${cohortName}`)
      } else {
        console.log(`Cohort ${cohortName} not found`)
      }
      return cohort
    }
  
    addStudentToCohort(cohortName, student) {
      const cohort = this.getCohortByName(cohortName)
      if (cohort) {
        cohort.addStudent(student)
      } else {
        throw new Error('Cohort not found')
      }
    }
  
    removeCohort(cohortName) {
      const cohort = this.getCohortByName(cohortName)
      if (cohort) {
        const index = this.cohorts.indexOf(cohort)
        this.cohorts.splice(index, 1)
        console.log(`Removed cohort ${cohortName}`)
      } else {
        throw new Error('Cohort not found')
      }
    }
  
    removeStudentFromCohort(cohortName, studentID) {
      const cohort = this.getCohortByName(cohortName)
      if (cohort) {
        cohort.removeStudent(studentID)
      } else {
        throw new Error('Cohort not found')
      }
    }
  
    searchCohort(cohortName) {
      const cohort = this.getCohortByName(cohortName)
      return cohort || null
    }
  }
  
  // Instantiate the CohortManager
  const cohortManager = new CohortManager()
  
  // Remove a student from the cohort
  console.log('###  Removing student from the cohort ### ')
  try {
    cohortManager.removeStudentFromCohort('Cohort A', 2)
  } catch (error) {
    console.log(error.message)
  }
  
  // Remove the cohort
  console.log('###  Removing cohort ### ')
  try {
    cohortManager.removeCohort('Cohort A')
  } catch (error) {
    console.log(error.message)
  }
  
  module.exports = {
    Student,
    Cohort,
    CohortManager
  }
  