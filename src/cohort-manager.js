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
}

// Create an instance of CohortManager
const cohortManager = new CohortManager()

// Create a new cohort using the create method
cohortManager.create('cohort4')
console.log(cohortManager.addStudent('cohort4', 'Diane', 21))

module.exports = { CohortManager }
