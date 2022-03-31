class Cohort {
  constructor(name, cohortCapacity = 10) {
    this.name = name;
    this.studentList = [];
    this.cohortCapacity = cohortCapacity;
  }
}

module.exports = Cohort;
