class CohortManager {
  constructor() {
    this.allStudents = []
    this.cohorts = []
    this.IDCount = 0
    this.studentCount = 0
  }

  createCohort(nameCohort) {
    const IDCount = (this.IDCount += 1)
    const cohort = new Cohort(nameCohort)
    cohort.IDCohort = IDCount
    cohort.nameCohort = nameCohort
    this.cohorts.push(cohort)
  }

  searchCohort(nameCohort) {
    const cohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === nameCohort
    )

    if (cohort === undefined) throw new Error('Cohort not found')

    // array with cohort object inside. in case there are multiple cohorts with same name e.g. "frontend cohort"
    return [cohort]
  }

  deleteCohort(nameCohort) {
    const cohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === nameCohort
    )
    const removedCohort = (cohort) => cohort.nameCohort === nameCohort
    const index = this.cohorts.findIndex(removedCohort)

    if (index === -1) {
      throw new Error('Cohort not found')
    } else if (cohort.nameCohort === nameCohort) {
      this.cohorts.splice(index, 1)
      return this.cohorts
    }
  }

  addNewStudent(name, surname, github, email, cohort) {
    const studentCount = (this.studentCount += 1)
    const student = {
      studentID: studentCount,
      cohortID: cohort,
      firstName: name,
      lastName: surname,
      githubUser: github,
      email: email
    }
    // new Student(name, surname, github, email, cohort)
    // student.studentID = studentCount
    this.allStudents.push(student)

    for (let i = 0; i < this.cohorts.length; i++) {
      if (student.cohortID === this.cohorts[i].nameCohort) {
        this.cohorts[i].studentsInCohort.push(student)
        this.cohorts[i].studentCount += 1
      }
    }
    return student
  }

  removeFromCohort(name, surname, nameCohort) {
    // find nameCohort
    const cohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === nameCohort
    )

    const student = cohort.studentsInCohort.find(
      (student) => student.firstName === name && student.lastName === surname
    )

    const filteredCohort = cohort.studentsInCohort.filter(
      (students) => students.studentID !== student.studentID
    )

    if (!student) {
      throw new Error('Student not found')
    } else {
      return filteredCohort
    }
  }

  findStudentbyID(id) {
    const student = this.allStudents.find((student) => student.studentID === id)
    if (student === undefined) throw new Error('Student not found')

    return student
  }
}

class Cohort {
  constructor(nameCohort) {
    this.IDCohort = 0
    this.nameCohort = nameCohort
    this.maxStudents = 24
    this.studentsInCohort = []
    this.studentCount = 0
  }
}

module.exports = {
  CohortManager,
  Cohort
}
