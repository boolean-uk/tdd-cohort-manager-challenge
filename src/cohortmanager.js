const cohortNotFoundError = 'cohort not found!'
const cohortFullError = 'This cohort is full'
const cohortCannotExistWithoutNameError = 'cohort cannot exist without a name!'
const cohortAlreadyExistsError = 'This cohort already exists!'
const studentNotFoundError = 'student not found!'
const studentInAnotherCohortError = 'This student is already in another cohort!'

class CohortManager {
  constructor () {
    this.studentList = []
    this.schoolCohorts = []
    this.cohortCapacity = 24
  }

  createStudent (student) {
    this.studentList.push(student)
  }

  createNStudents (num, student) {
    for (let i = 0; i < num; i++) {
      this.studentList.push(student)
    }
  }

  createCohort (cohortname) {
    const exists = this.checkIfCohortExists(cohortname)
    if (cohortname === undefined) {
      return cohortCannotExistWithoutNameError
    } else if (exists) {
      return cohortAlreadyExistsError
    }
    const cohort = {
      name: cohortname,
      students: [],
      cohortCapacity: this.cohortCapacity
    }
    this.schoolCohorts.push(cohort)
    return cohort
  }

  checkIfCohortExists (cohortname) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      if (this.schoolCohorts[i].name === cohortname) {
        return true
      }
    }
    return false
  }

  removeCohort (cohortname) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      const cohort = this.schoolCohorts[i]
      if (cohort.name === cohortname) {
        this.schoolCohorts.splice(i, 1)
        return
      }
    }
    return cohortNotFoundError
  }

  checkIfStudentAlreadyInCohort (studentfirstname, studentlastname) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      for (const element of this.schoolCohorts[i].students) {
        if (element.studentFirstName === studentfirstname && element.studentLastName === studentlastname) {
          return true
        }
      }
    }
    return false
  }

  addStudentToCohort (studentfirstname, studentlastname, cohortname) {
    const cohort = this.searchCohort(cohortname)
    const studentAlreadyInCohort = this.checkIfStudentAlreadyInCohort(studentfirstname, studentlastname)
    if (studentAlreadyInCohort) {
      return studentInAnotherCohortError
    }
    if (typeof cohort === 'string') {
      return cohortNotFoundError
    }
    for (let i = 0; i < this.studentList.length; i++) {
      const cohortStudent = this.studentList[i]
      if (
        cohortStudent.studentFirstName === studentfirstname && cohort.students.length < this.cohortCapacity
      ) {
        cohort.students.push(cohortStudent)
        return cohortFullError
      }
    }
    return studentNotFoundError
  }

  removeStudentFromCohort (studentid, cohortname) {
    const cohort = this.searchCohort(cohortname)
    if (typeof cohort === 'string') {
      return cohortNotFoundError
    }
    for (let i = 0; i < cohort.students.length; i++) {
      if (cohort.students[i].studentID === studentid) {
        cohort.students.splice(i, 1)
        return
      }
    }
    return studentNotFoundError
  }

  searchStudent (id) {
    for (let i = 0; i < this.studentList.length; i++) {
      const student = this.studentList[i]
      if (student.studentID === id) {
        return student
      }
    }
    return studentNotFoundError
  }

  searchStudentByName (firstname, lastname) {
    const studentArray = []
    for (let i = 0; i < this.studentList.length; i++) {
      const student = this.studentList[i]
      if (student.studentFirstName === firstname && student.studentLastName === lastname) {
        studentArray.push(student)
      }
    }
    return studentArray
  }

  searchCohort (cohortname) {
    const found = this.schoolCohorts.find((c) => c.name === cohortname)
    if (found) {
      return found
    } return cohortNotFoundError
  }

  getAllCohorts () {
    return this.schoolCohorts
  }

  getStudentList () {
    return this.studentList
  }
}

module.exports = CohortManager
