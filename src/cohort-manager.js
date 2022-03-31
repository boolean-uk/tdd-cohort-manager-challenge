const Cohort = require('./cohort')
const Student = require('./student')

class CohortManager {
  constructor () {
    this.cohortArray = []
    this.studentID = 1
  }

  addCohort (name, maxCapacity) {
    if (name.length === 0) {
      return false
    }
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (name === this.cohortArray[i].name) {
        return false
      }
    }
    const cohort = new Cohort(name, maxCapacity)
    this.cohortArray.push(cohort)
    return this.cohortArray
  }

  removeCohort (name) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (name === this.cohortArray[i].name) {
        this.cohortArray.splice(i, 1)
        return this.cohortArray
      }
    }
    return false
  }

  searchByCohortName (name) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (name === this.cohortArray[i].name) {
        return this.cohortArray[i]
      }
    }
    return 'This cohort does not exist'
  }

  searchByStudentEmail (email) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        if (email === this.cohortArray[i].studentsArray[j].email) {
          return this.cohortArray[i].studentsArray[j]
        }
      }
    }
    return 'There are no students with the entered email'
  }

  searchByStudentID (studentID) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        if (studentID === this.cohortArray[i].studentsArray[j].studentID) {
          return this.cohortArray[i].studentsArray[j]
        }
      }
    }
    return 'There are no students with the entered email'
  }

  addStudentToCohort (cohortName, firstName, surname, githubUser, email) {
    if (
      this.searchByStudentEmail(email) !==
      'There are no students with the entered email'
    ) {
      return false
    }
    const student = new Student(
      cohortName,
      firstName,
      surname,
      githubUser,
      email
    )
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (
        cohortName === this.cohortArray[i].name &&
        this.cohortArray[i].studentsArray.length <
          this.cohortArray[i].maxCapacity
      ) {
        student.studentID = this.studentID
        this.studentID++
        this.cohortArray[i].studentsArray.push(student)
        return student
      }
    }
    return false
  }

  removeStudentFromCohort (cohortName, email) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (cohortName === this.cohortArray[i].name) {
        for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
          if (email === this.cohortArray[i].studentsArray[j].email) {
            this.cohortArray[i].studentsArray.splice(j, 1)
            return this.cohortArray[i].studentsArray
          }
        }
      }
    }
    return false
  }

  searchStudentByFirstName (firstName) {
    const matchedFirstNameArray = []
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        if (this.cohortArray[i].studentsArray[j].firstName === firstName) {
          matchedFirstNameArray.push(this.cohortArray[i].studentsArray[j])
        }
      }
    }
    if (matchedFirstNameArray.length === 0) {
      return false
    }
    return matchedFirstNameArray
  }

  searchStudentBySurname (surname) {
    const matchedSurnameArray = []
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        if (this.cohortArray[i].studentsArray[j].surname === surname) {
          matchedSurnameArray.push(this.cohortArray[i].studentsArray[j])
        }
      }
    }
    if (matchedSurnameArray.length === 0) {
      return false
    }
    return matchedSurnameArray
  }

  searchStudentByFullName (firstName, surname) {
    const matchedFullNameArray = []
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        if (
          this.cohortArray[i].studentsArray[j].surname === surname &&
          this.cohortArray[i].studentsArray[j].firstName === firstName
        ) {
          matchedFullNameArray.push(this.cohortArray[i].studentsArray[j])
        }
      }
    }
    if (matchedFullNameArray.length === 0) {
      return false
    }
    return matchedFullNameArray
  }
}

module.exports = CohortManager
