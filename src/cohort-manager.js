class CohortManager {
  constructor() {
    this.cohorts = [
      {
        name: 'cohort1',
        students: [
          { id: 1, name: 'Tayo', age: 23 },
          { id: 2, name: 'Eazy', age: 22 },
          { id: 3, name: 'Tosin', age: 38 }
        ]
      },
      {
        name: 'cohort3',
        students: [
          { id: 1, name: 'Damilola', age: 23 },
          { id: 2, name: 'Segun', age: 56 },
          { id: 3, name: 'Ope', age: 32 }
        ]
      }
    ]
  }

  create(cohortName) {
    const cohort = {
      name: cohortName,
      students: []
    }

    this.cohorts.push(cohort)
    return cohort
  }

  searchCohort(cohortName) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    return foundCohort
  }

  addStudent(cohortName, newStudent, studentAge) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)

    if (cohort) {
      const newStudentId = cohort.students.length
        ? cohort.students.length + 1
        : 1
      const newStudentObject = {
        id: newStudentId,
        name: newStudent,
        age: studentAge
      }
      cohort.students.push(newStudentObject)

      return newStudentObject
    } else {
      return 'Cohort not found'
    }
  }

  removeCohort(cohortName) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)

    if (!cohort) {
      return 'Cohort not found'
    } else {
      const indexOfCohort = this.cohorts.indexOf(cohort)
      const removedCohort = this.cohorts.splice(indexOfCohort, 1)
      return removedCohort
    }
  }

  removeStudent(cohortName, studentName) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)
    if (!cohort) {
      return 'Cohort not found'
    }
    const foundStudent = cohort.students.find(
      (student) => student.name === studentName
    )

    if (!foundStudent) {
      return 'Student not found'
    } else {
      const indexOfStudent = cohort.students.indexOf(foundStudent)

      const removedStudent = cohort.students.splice(indexOfStudent, 1)

      return removedStudent
    }
  }
}

// Create an instance of CohortManager
const cohortManager = new CohortManager()

// Create a new cohort using the create method

cohortManager.create('cohort4')
console.log(cohortManager.addStudent('cohort1', 'Jamie', '18'))

cohortManager.removeStudent('cohort1', 'Eazy')
module.exports = { CohortManager }
