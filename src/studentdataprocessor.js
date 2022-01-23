const DATA = require('./students.json');
let COHORTS = [];
console.log(DATA);

class StudentDataProcessor {
  constructor() {
    this.students = DATA.students;
  }
}

cohortOne = new CohortManager();

cohortOne.createCohortWithName();
