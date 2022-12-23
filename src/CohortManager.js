// Joels version
// class CohortManager {
//   constructor() {
//     this.cohortList = []
//     this.studentList = []
//   }

// const { version } = require('prettier')

//   createCohort(name) {
//     const id = this.cohortList.length + 1
//     const cohort = new Cohort(name, id)
//     this.cohortList.push(cohort)

//     return cohort
//   }

//   createStudent(firstName, lastName, githubUsername, email) {
//     const id = this.studentList.length + 1
//     const student = new Student(firstName, lastName, githubUsername, email, id)
//     this.studentList.push(student)

//     return student
//   }
// }

// Nathans version
// class CohortManager {
//   cohortId = 0
//   studentId = 0
//   cohorts = []

//   createCohort(name) {
//     this.cohortId++
// create an instance of Cohort using this.cohortId and the name passed as a parameter, then push it to the cohorts array
//   }

//   createStudent(cohortId, studentName, email, etc) {
//     this.studentId++
// create an instance of Student using this.studentId, studentName, email etc passed in the parameters
// find the cohort in this.cohorts that has an ID of cohortId passed as a parameter
// add the student instance to that cohort's students array
//   }
// }

// class Cohort {
//   constructor(id, name) {
//     this.id = id
//     this.name = name
//     this.students = []
//   }
// }

// class Student {
//   constructor(id, name, email) {}
// }
