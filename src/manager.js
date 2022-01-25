const Cohort = require("./cohort.js");

class Manager {
  constructor() {
    this.cohortList = [];
  }

  create() {
    return this.cohortList;
  }

  addCohort(coName) {
    let cohortName = new Cohort(coName);
    this.cohortList.push(cohortName);
    return cohortName;
  }

  searchCohort(name) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (name === this.cohortList[i].coName) {
        return this.cohortList[i];
      }
    }
    return "ERROR: cohort not found";
  }

  removeCohort(coName) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].coName === coName) {
        this.cohortList.splice(i, 1);
      }
    }
    return this.cohortList;
  }

  
}

module.exports = Manager;
