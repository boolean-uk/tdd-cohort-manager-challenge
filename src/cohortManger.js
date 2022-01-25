// const Cohort = require("../src/cohort");
class CohortManager {
  constructor() {
    this.cohortsArr = [];
  }

  createCohort(cohortName_) {
    // create a cohort objects and add to the cohortArra
    const cohort = { cohortName: cohortName_, students: [] };
    this.cohortsArr.push(cohort);
    return this.cohortsArr;
  }

  searchCohortByName(cohortName) {
    for (let cohort of this.cohortsArr) {
      if (cohort.cohortName === cohortName) {
        return cohort;
      }
    }

    return "Error, cohort not found";
  }

  addStudentToCohort(cohortName, student) {
    const cohort = this.searchCohortByName(cohortName);
    if (cohort === "Error, cohort not found") {
      return cohort;
    }
    cohort.students.push(student);
  }

  removeCohortByName(cohortName) {
    const cohort = this.searchCohortByName(cohortName);
    for (let i = 0; i < this.cohortsArr.length; i++) {
      if (cohortName === this.cohortsArr[i].cohortName) {
        this.cohortsArr.splice(i, 1);
        return this.cohortsArr;
      }
    }

    return cohort;
  }

  removeStudentByCohort(cohortName, studentTDelete) {
    // find cohort
    const cohort = this.searchCohortByName(cohortName);
    for (let student of cohort.students) {
      if (student.ID === studentTDelete.ID) {
        cohort.students.splice(cohort.students.indexOf(student), 1);
        return cohort;
      }
    }
    if (student.ID === undefined) {
      return cohort;
    }
  }
}
module.exports = CohortManager;
