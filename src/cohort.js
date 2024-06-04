export default class CohortsManeger {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)
  }

  findCohort(cohortName) {
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)

    if (cohort instanceof Cohort === false)
      throw new Error(this.getErrorMessage(cohortName))

    return cohort
  }

  getErrorMessage(cohortName) {
    return `The ${cohortName} cohort is not found!`
  }
}

export class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }
}

export class Student {}
