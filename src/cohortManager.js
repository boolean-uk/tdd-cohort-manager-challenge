class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )

    if (existingCohort) {
      throw new Error('Cohort name already exists')
    }
    const cohort = { name: cohortName, students: [] }
    this.cohorts.push(cohort)
    return cohort
  }

  findCohort(cohortName) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )

    if (!existingCohort) {
      throw new Error('Cohort does not exist')
    }
    return existingCohort
  }

  addStudentToCohort(cohortName, student) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    if (!existingCohort) {
      throw new Error('Cohort does not exist')
    }
    existingCohort.students.push(student)
    return existingCohort
  }

  findStudentById(cohortName, id) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    if (!existingCohort) {
      throw new Error('Cohort does not exist')
    }
    if (existingCohort.students.find((student) => student.id !== id)) {
      throw new Error('Student does not exist')
    }
    return existingCohort.students.find((student) => student.id === id)
  }
}

export default CohortManager
