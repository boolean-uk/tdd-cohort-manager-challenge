class Cohort {
  constructor(name) {
    this.CohortName = name
  }

  searchCohort(name, cohortsArray) {
    return cohortsArray.find((cohort) => cohort.CohortName === name)
  }
}

export default Cohort
