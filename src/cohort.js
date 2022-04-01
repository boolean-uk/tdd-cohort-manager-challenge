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
      this.studentList.push(studentObj);
      return this.studentList;
    }

    return `cant add anymore students`;
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

  hasStudent(studentEmail) {
    return this.studentList.find((student) => student.email === studentEmail)
      ? true
      : false;
  }

  getStudent(studentEmail) {
    return this.studentList.find((student) => student.email === studentEmail);
  }
}

module.exports = Cohort;
