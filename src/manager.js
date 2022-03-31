class Manager {
  constructor() {
    this.cohortList = [];
  }

  createCohortName(cohortName) {
    const cohort = {
      name: cohortName,
      studentList: [],
    };
    this.cohortList.push(cohort);
    return this.cohortList;
  }

  searchCohortName(cohortName) {
    for (let i = 0; i < this.cohortList.length; i++) {
      return this.cohortList[i];
    }
  }
}

module.exports = Manager;
