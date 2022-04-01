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
    const newArray = [];
    for (let i = 0; i < this.cohortList.length; i++) {
      const cohortObject = this.cohortList[i];
      if (cohortObject.name === cohortName) {
        newArray.push(cohortObject);
      }
    }
    return newArray;
  }
}

module.exports = Manager;
