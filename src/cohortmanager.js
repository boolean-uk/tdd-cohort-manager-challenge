class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  searchByCohortName(searchedCohortName) {
    return this.cohortList.find((cohort) => cohort.name === searchedCohortName);
  }

  addNewCohort(newCohort) {
    this.cohortList.push(newCohort);
  }

  removeCohort(cohortInstance) {
    const indexOfCohort = this.cohortList.indexOf(cohortInstance);

    this.cohortList.splice(indexOfCohort, 1);
    return this.cohortList;
  }

  addStudentToCohort(newStudent, cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    cohort.studentList.push(newStudent);

    return cohort;
  }
  removeStudentFromCohort(removedStudent, cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    const indexOfStudent = cohort.studentList.indexOf(removedStudent);

    cohort.studentList.splice(indexOfStudent, 1);
    return cohort;
  }

  // studentExists(searchedStudent, studentListArray) {
  //   console.log(
  //     studentListArray.find((student) => student === searchedStudent)
  //   );
  // }

  cohortExists() {}
}

module.exports = CohortManager;

// if (indexOfCohort === -1) return "Cohort doesnt exist";
// const indexOfCohort2 = this.cohortList.findIndex(
//   (cohort) => cohort.name === cohortName
// );
