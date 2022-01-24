const student = require("./student.js")

class CohortManager {
  constructor () {
    this.studentList = []
    this.schoolCohorts = []
    this.cohortCapacity = 24
  }

  createStudent (student) {
    this.studentList.push(student)
  }

  createNStudents(num) {
    for(let i = 0; i < num; i++) {
      const student = new student(1, "firstname", "lastname", "github", "email")
      this.studentList.push(student)
    }
    console.log(this.studentList.studentFirstName)
  }

  createCohort (cohortname) {
    if (cohortname === undefined) {
      return 'cohort cannot exist without a name!'
    }
    const cohort = {
      name: cohortname,
      students: [],
      cohortCapacity: this.cohortCapacity
    }
    this.schoolCohorts.push(cohort)
    return cohort
  }

  removeCohort (cohortname) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      const cohort = this.schoolCohorts[i]
      if (cohort.name === cohortname) {
        this.schoolCohorts.splice(i, 1)
        return
      }

    }
    return 'cohort not found!'
  }

  addStudentToCohort (student, cohortname) {
    const cohort = this.searchCohort(cohortname)
    if (typeof cohort === 'string') {
      return 'cohort not found!'
    }
    for (let i = 0; i < this.studentList.length; i++) {
      const cohortStudent = this.studentList[i]
      if (
        cohortStudent.studentFirstName === student && cohort.students.length < this.cohortCapacity
      ) {
        cohort.students.push(cohortStudent)
      }
    }
    return 'this student does not exist!'
  }
  removeStudentFromCohort (studentid, cohortname) {
    const cohort = this.searchCohort(cohortname)
    if (typeof cohort === 'string') {
      return 'cohort not found!'
    }
    for (let i = 0; i < cohort.students.length; i++) {
      if (cohort.students[i].studentID === studentid) {
        cohort.students.splice(i, 1)
        return
      }
    }
    return 'student not found!'
  }

  searchStudent(id) {
    for(let i = 0; i < this.studentList.length; i++){
      const student = this.studentList[i]
      if(student.studentID === id) {
        return student
      }
    }
    return 'student not found by this id!'
  }

  searchCohort (cohortname) {
    const found = this.schoolCohorts.find((c) => c.name === cohortname)
    if (found) {
      return found
    } return 'this cohort does not exist!'
  }

  getAllCohorts () {
    return this.schoolCohorts
  }

  getStudentList () {
    return this.studentList
  }
  
}

module.exports = CohortManager
