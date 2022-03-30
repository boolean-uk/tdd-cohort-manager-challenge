class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  addNewCohort(newCohort) {
    this.cohortList.push(newCohort);
  }
  searchByCohortName(searchedCohortName) {
    return this.cohortList.find((cohort) => cohort.name === searchedCohortName);
  }
}

module.exports = CohortManager;
