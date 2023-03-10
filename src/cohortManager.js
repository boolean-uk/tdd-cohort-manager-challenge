class CohortManager {
  constructor() {
    this.allStudents = []
    this.cohorts = []
    this.IDCount = 0
    this.allStudentsCount = 0
  }

  createCohort(nameCohort) {
    const cohorts = this.cohorts
    for (let i = 0; i < cohorts.length; i++) {
      if (cohorts[i].nameCohort === nameCohort) {
        throw new Error('This cohort already exists')
      }
    }
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
    const studentCount = (this.allStudentsCount += 1)
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
        if (this.cohorts[i].cohortStudentCount >= 24) {
          throw new Error(
            'Cohort is full. Please assign student to another cohort'
          )
        } else {
          this.cohorts[i].cohortStudentCount += 1
          this.cohorts[i].studentsInCohort.push(student)
        }
      }
    }
    return student
  }

  removeFromCohort(name, surname, nameCohort) {
    // find nameCohort
    const cohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === nameCohort
    )

    cohort.cohortStudentCount -= 1

    const student = cohort.studentsInCohort.find(
      (student) => student.firstName === name && student.lastName === surname
    )

    const filteredCohort = cohort.studentsInCohort.filter(
      (students) => students.studentID !== student.studentID
    )
    const oldCohortIndex = (cohort) => cohort.nameCohort === nameCohort

    const index = this.cohorts.findIndex(oldCohortIndex)
    this.cohorts[index] = filteredCohort

    if (!student) {
      throw new Error('Student not found')
    }
    // console.log((this.cohorts[index] = filteredCohort))
    return filteredCohort
  }

  reassignStudentCohort(studentID, newCohort) {
    // find student, extract current cohort name, student name + surname
    const student = this.allStudents.find(
      (student) => student.studentID === studentID
    )

    const firstName = student.firstName
    const lastName = student.lastName
    const cohortID = student.cohortID

    // console.log('--------Pre this.removeFromCohort-----------')
    this.removeFromCohort(firstName, lastName, cohortID)

    // push student into different existing cohort's studentsInCohort
    const studentNewCohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === newCohort
    )
    student.cohortID = newCohort
    studentNewCohort.cohortStudentCount += 1
    studentNewCohort.studentsInCohort.push(student)
    // console.log('-------Post this.removeFromCohort-----------------')
    // console.log('studentNewCohort:', studentNewCohort)
  }

  // Extensions
  findStudentbyID(id) {
    const student = this.allStudents.find((student) => student.studentID === id)
    if (student === undefined) throw new Error('Student not found')

    return student
  }

  findStudentbytName(name) {
    const student = this.allStudents.filter(
      (student) => student.firstName === name || student.lastName === name
    )

    if (student.length === 0) {
      throw new Error('Student not found')
    } else {
      return student
    }
  }
}

class Cohort {
  constructor(nameCohort) {
    if (nameCohort === undefined) {
      throw new Error('Cohort must be given a name')
    }
    this.IDCohort = 0
    this.nameCohort = nameCohort
    this.maxStudents = 24
    this.studentsInCohort = []
    this.cohortStudentCount = 0
  }
}

module.exports = {
  CohortManager,
  Cohort
}
