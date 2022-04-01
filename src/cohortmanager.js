const Cohort = require("../src/cohort");

class CohortManager {
  constructor() {
    this.cohortList = [];
  }

  createNewCohort(cohortName) {
    const newCohort = new Cohort(cohortName);
    this.cohortList.push(newCohort);

    return `New Cohort (${cohortName}) created.`;
  }

  removeCohort(cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    if (!this.cohortExists(cohort)) return `cant remove - cohort doesnt exist`;

    const indexOfCohort = this.cohortList.indexOf(cohort);

    this.cohortList.splice(indexOfCohort, 1);
    return this.cohortList;
  }

  searchByCohortName(searchedCohortName) {
    return this.cohortList.find((cohort) => cohort.name === searchedCohortName);
  }

  addStudentToCohort(studentObj, cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    if (!this.cohortExists(cohort)) return `cohort doesnt exist`;

    if (cohort.hasStudent(studentObj.email)) return `Student already exists`;

    cohort.addStudent(studentObj);

    return cohort;
  }

  removeStudentFromCohort(studentEmail, cohortName) {
    const cohort = this.searchByCohortName(cohortName);
    if (!this.cohortExists(cohort)) return `cohort doesnt exist`;

    if (!cohort.hasStudent(studentEmail)) return `Student doesnt exist`;

    cohort.removeStudent(studentEmail);
    return cohort;
  }

  cohortExists(searchedCohort) {
    return this.cohortList.find((cohort) => cohort === searchedCohort)
      ? true
      : false;
  }
}

module.exports = CohortManager;

// searchByStudentID(id) {
//   for (let i = 0; i < this.cohortList.length; i++) {
//     const studentList = this.cohortList[i].studentList;

//     for (let k = 0; k < studentList.length; k++) {
//       if (studentList[k].id === id) return studentList[k];
//     }
//   }
//   return `student not found`;
// }

// searchByStudentEmail(email) {
//   for (let i = 0; i < this.cohortList.length; i++) {
//     const cohort = this.cohortList[i];
//     if (cohort.hasStudent(email)) {
//       return cohort.getStudent(email);
//     }
//   }
//   return `student not found`;
// }

// addStudentToCohort(studentObj, cohortName) {
//   if (this.cohortExists(cohortName)) {
//     if (!this.studentExists(studentObj.email)) {
//       const cohort = this.searchByCohortName(cohortName);
//       cohort.addStudent(studentObj);

//       return cohort;
//     }
//     return `Student already exists`;
//   }
//   return `cohort doesnt exist`;
// }
