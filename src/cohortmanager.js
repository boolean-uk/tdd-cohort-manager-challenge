class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  addNewCohort(cohortObj) {
    this.cohortList.push(cohortObj);
  }

  searchByCohortName(searchedCohortName) {
    return this.cohortList.find((cohort) => cohort.name === searchedCohortName);
  }

  searchByCohort(searchedCohortObj) {
    return this.cohortList.find((cohort) => cohort === searchedCohortObj);
  }

  searchByStudentID(id) {
    for (let i = 0; i < this.cohortList.length; i++) {
      const studentList = this.cohortList[i].studentList;

      for (let k = 0; k < studentList.length; k++) {
        if (studentList[k].id === id) return studentList[k];
      }
    }
    return `student not found`;
  }

  removeCohort(cohortObj) {
    const indexOfCohort = this.cohortList.indexOf(cohortObj);

    this.cohortList.splice(indexOfCohort, 1);
    return this.cohortList;
  }

  addStudentToCohort(studentObj, cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    cohort.studentList.push(studentObj);

    return cohort;
  }

  removeStudentFromCohort(removedStudent, cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    const indexOfStudent = cohort.studentList.indexOf(removedStudent);

    cohort.studentList.splice(indexOfStudent, 1);
    return cohort;
  }

  studentExists(searchedStudent, studentListArray) {
    return studentListArray.find((student) => student === searchedStudent)
      ? true
      : false;
  }

  cohortExists(searchedCohort) {
    return this.cohortList.find((cohort) => cohort === searchedCohort)
      ? true
      : false;
  }
}

module.exports = CohortManager;
