class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  add(newCohort) {
    this.cohortList.push(newCohort);
  }

  search(cohort) {
    for (let i = 0; i < this.cohortList.length; i++) {
      const cohortName = this.cohortList[i].name;
      if (cohortName === cohort) {
        return this.cohortList[i];
      }
    }
    return "ERROR – this cohort do not exist";
  }
}

module.exports = CohortManager;
