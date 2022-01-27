class cohortManagerClass {
  constructor() {
    this.cohorts = [];
    this.cohortCapacity = 24;
  }

  createCohort(cohortName) {
    const cohort = {
      cohortName: cohortName,
      students: [],
    };

    this.cohorts.push(cohort);

    return cohort;
  }

  searchCohort(cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].cohortName === cohortName) {
        return this.cohorts[i];
      }
    }
    return "Cohort not found";
  }

  addStudentToCohort(cohortName, student) {
    const cohort = this.searchCohort(cohortName)
    cohort.students.push(student)
    }

  removeCohort(cohortName) {
    for (let i=0;i<this.cohorts.length;i++) {
      if (this.cohorts[i].cohortName==cohortName) {
        this.cohorts.splice(i,1)
      }
    }
  }

  removeStudentFromCohort(cohortName, studentID) {
    const cohort = this.searchCohort(cohortName)
    if (cohortName=='cohort not found')
    return cohort


    for(let i=0; i<cohort.students.length; i++) {
      if (cohort.students[i].studentID === studentID) {
        cohort.students.splice(i, 1)
        return
      }
    }
    return "student not found"
  }









  }


module.exports = cohortManagerClass;
