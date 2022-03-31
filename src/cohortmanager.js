class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  addNewCohort(newCohortObj) {
    this.cohortList.push(newCohortObj);
  }

  searchByCohortName(searchedCohortName) {
    return this.cohortList.find((cohort) => cohort.name === searchedCohortName);
  }

  searchByStudentID(id) {
    // console.log(this.cohortList);
    // console.log(this.cohortList[1]);
    // console.log(this.cohortList[1].studentList);
    // console.log(this.cohortList[1].studentList[0]);
    // console.log(this.cohortList[1].studentList[0].id);
    let studentCohortFound = false;

    for (let i = 0; i < this.cohortList.length; i++) {
      const studentList = this.cohortList[i].studentList;
      // console.log(studentList);
      for (let k = 0; k < studentList.length; k++) {
        // console.log(studentList[k]);
        // console.log(studentList[k].id);
        // console.log(studentList[k].id === id);

        if (studentList[k].id === id) return studentList[k];
        studentCohortFound === true;

        // console.log(studentCohort);
      }
      // if (studentCohortFound) console.log(cohortList[i]);
      // break;
    }
  }

  // searchByCohort(searchedCohortObj) {
  //   return this.cohortList.find((cohort) => cohort === searchedCohortObj);
  // }

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
