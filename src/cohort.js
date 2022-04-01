class Cohort {
  constructor(name, cohortCapacity = 10) {
    this.name = name;
    this.studentList = [];
    this.cohortCapacity = cohortCapacity;
  }

  addStudent(studentObj) {
    // check email of studentobj doesnt already exist with  has student ()
    // has capacity mehtod
    if (this.studentList.length < this.cohortCapacity) {
      return this.studentList.push(studentObj);
    }

    return false;
  }

  hasStudent(studentEmail) {
    return this.studentList.find((student) => student.email === studentEmail)
      ? true
      : false;
  }

  getStudent(studentEmail) {
    return this.studentList.find((student) => student.email === studentEmail);
  }

  removeStudent(studentEmail) {
    // if (this.hasStudent(studentEmail)) {
    const studentIndex = this.studentList.findIndex(
      (student) => student.email === studentEmail
    );

    this.studentList.splice(studentIndex, 1);
    return this.studentList;
    // }
    // return false;
  }
}

module.exports = Cohort;
