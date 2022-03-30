class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  add(newCohort) {
    this.cohortList.push(newCohort);
  }
}

module.exports = CohortManager;
