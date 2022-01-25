class CohortManager {
  constructor(name) {
    this.cohorts = [];
    // property of the class
    this.name = name;
    // include the attributes that you would want every instance of the class
    // CohortManager to have
  }

  createCohort(name) {
    const cohort = {
      cohortName: name,
      students: [],
    };

    this.cohorts.push(cohort);
  }

  searchCohorts(cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].cohortName === cohortName) {
        return this.cohorts[i];
      }
    }
    return cohortName + " not found";
  }

  addStudent(cohortName, ID, firstName, lastName, gitName, email) {
    const cohort = this.searchCohorts(cohortName);

    const student = {
      id: ID,
      name: firstName,
      surname: lastName,
      github: gitName,
      email: email,
    };

    cohort.students.push(student);
    return student;
  }

  removeCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].cohortName === name) {
        this.cohorts.splice(i, 1);
      }
      return this.cohorts;
    }
    return name + " not found";
  }

  // find cohort (function) find student in student array then remove student
  // going through list of students
  removeStudent(ID, cohortName) {
    const cohort = this.searchCohorts(cohortName);

    for (let i = 0; i < cohort.students.length; i++) {
      if (cohort.students[i].id === ID) {
        cohort.students.splice(i, 1);
      }
    }
    return cohort;

    // const cohort = this.searchCohorts(cohortName)
    //   for (let i = 0; i < cohort.cohortName.students.length; i++){
    //     if ((this.cohorts.students.id) === ID)
    //     this.cohorts.splice(id, 1)
    // }
    // return this.cohorts.cohortName.students
  }
}

module.exports = CohortManager;
