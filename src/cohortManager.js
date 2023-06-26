class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }
}

class Student {
  constructor(id, firstName, lastName, githubUser, email) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.githubUser = githubUser
    this.email = email
  }
}

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohortByName(cohortName) {
    if (typeof cohortName !== 'string' || cohortName.length < 1) {
      console.error('Cannot create cohort, Invalid input.')
      return false
    }

    const duplicate = this.cohorts.find((cohort) => {
      return cohort.name === cohortName
    })

    if (duplicate) {
      console.error(
        'Cannot create cohort, A cohort with that name already exists.'
      )
      return false
    }

    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)
    return newCohort
  }

  searchCohortByName(cohortName) {
    if (typeof cohortName !== 'string' || cohortName.length < 1) {
      console.error('Cannot search for cohort, Invalid input.')
      return false
    }

    const newArr = []
    this.cohorts.map((cohort) => {
      if (cohort.name === cohortName) {
        newArr.push(cohort)
        return true
      } else {
        return false
      }
    })

    if (newArr.length !== 0) {
      return newArr
    }

    return false
  }

  addStudentToCohort(cohortName, student) {
    if (
      typeof cohortName !== 'string' ||
      cohortName.length < 1 ||
      !(student instanceof Student)
    ) {
      console.error('Cannot add student to cohort, Invalid input.')
      return false
    }

    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)

    if (cohort === undefined) {
      console.error('Could not add student to cohort, Cohort does not exist.')
      return false
    }

    if (cohort.students.length >= 24) {
      console.error('Could not add student to cohort, Cohort is full.')
      return false
    }

    let isOnOtherCohort = false
    this.cohorts.forEach((currentCohort) => {
      currentCohort.students.forEach((currentStudent) => {
        if (currentStudent.name === student.name) {
          isOnOtherCohort = true
        }
      })
    })

    if (isOnOtherCohort) {
      console.error(
        'Could not add student to cohort, Student is a part of another cohort.'
      )
      return false
    }

    cohort.students.push(student)
    return true
  }

  removeCohortByName(cohortName) {
    if (typeof cohortName !== 'string' || cohortName.length < 1) {
      console.error('Cannot remove cohort, Invalid input.')
      return false
    }

    const cohort = this.searchCohortByName(cohortName)

    if (!cohort) {
      return false
    }

    const index = this.cohorts.indexOf(cohort)
    this.cohorts.splice(index, 1)

    return true
  }

  removeStudentFromCohort(cohortName, student) {
    if (
      typeof cohortName !== 'string' ||
      cohortName.length < 1 ||
      !(student instanceof Student)
    ) {
      console.error('Cannot remove student from cohort, Invalid input.')
      return false
    }

    const cohort = this.cohorts.find((currentCohort) => {
      return currentCohort.name === cohortName
    })

    if (!cohort) {
      console.error('Cannot remove student from cohort, Cohort does not exist.')
      return false
    }

    const studentExists = cohort.students.find((currentStudent) => {
      return currentStudent.name === student.name
    })

    if (studentExists instanceof Student) {
      return true
    } else {
      console.error(
        'Cannot remove student from cohort, Student does not exist.'
      )
      return false
    }
  }

  searchStudentByName(studentName) {
    if (typeof studentName !== 'string' || studentName.length < 1) {
      console.error('Cannot search for student, Invalid input.')
      return false
    }

    const newArr = []
    this.cohorts.forEach((currentCohort) => {
      currentCohort.students.forEach((currentStudent) => {
        if (
          currentStudent.firstName + ' ' + currentStudent.lastName ===
          studentName
        ) {
          newArr.push(currentStudent)
        }
      })
    })

    if (newArr.length <= 0) {
      return false
    } else {
      return newArr
    }
  }

  searchStudentById(studentId) {
    if (typeof studentId !== 'number') {
      console.error('Cannot search for student, Invalid input.')
      return false
    }

    const id = studentId.toString()

    let student = false
    this.cohorts.forEach((currentCohort) => {
      currentCohort.students.forEach((currentStudent) => {
        if (currentStudent.id === id) {
          student = currentStudent
        }
      })
    })

    if (student === false) {
      return false
    } else {
      return student
    }
  }
}

module.exports = {
  CohortManager,
  Cohort,
  Student
}
