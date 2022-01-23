const DATA = require('./students.json');
const STUDENTS = DATA.students;
console.log(STUDENTS);

class CohortManager {
  constructor() {
    this.COHORTS = [];
    this.cohortID = 1;
  }

  createCohort(cohortName) {
    let cohortObject = {
      ID: this.cohortID,
      name: cohortName,
      status: 'space available',
    };
    this.COHORTS.push(cohortObject);
    this.cohortID = this.cohortID + 1;
    return cohortObject;
  }

  //Remove a Cohort by cohort name
  removeCohortByName() {}

  //Search for cohort by cohort name
  findCohortByName(cohortName) {
    const findCohort = this.COHORTS.find(
      (searchCohortName) => searchCohortName.name === cohortName
    );
    return findCohort;
  }

  //Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit. - EXT
  checkCohortCapacity() {}

  //Cohorts can't have the same name, and can't exist without a name - EXT
  checkCohortName() {}
}

let cohortmanagement = new CohortManager();

cohort1 = cohortmanagement.createCohort('cohort1');

cohortmanagement.findCohortByName('cohort1').name;
cohortmanagement.findCohortByName('cohort2');

cohort1.name;

module.exports = CohortManager;

//test comment to make file push
