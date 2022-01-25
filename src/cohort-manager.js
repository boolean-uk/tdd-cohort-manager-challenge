class CohortManager {
  constructor(name) {
    this.cohorts = [];
    this.name = name;
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
        return this.cohorts;
      }
    }
    return name + " not found";
  }

  removeStudent(ID, cohortName) {
    const cohort = this.searchCohorts(cohortName);

    for (let i = 0; i < cohort.students.length; i++) {
      if (cohort.students[i].id === ID) {
        cohort.students.splice(i, 1);
        return cohort;
      }
    }
    return "Student " + ID + " not found";
  }
}

module.exports = CohortManager;
