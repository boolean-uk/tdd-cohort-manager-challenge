class Cohort {
  constructor(name, cohortCapacity = 10) {
    this.name = name;
    this.studentList = [];
    this.cohortCapacity = cohortCapacity;
  }

  addStudent(studentObj) {
    if (this.hasStudent(studentObj.email)) return `Err: Student already exists`;

    if (this.studentList.length >= this.cohortCapacity)
      return `Err: cant add anymore students`;

    this.studentList.push(studentObj);
    return this.studentList;
  }

  removeStudent(studentEmail) {
    if (!this.hasStudent(studentEmail)) return `Err: Student doesnt exist`;

    const studentIndex = this.studentList.findIndex(
      (student) => student.email === studentEmail
    );

    this.studentList.splice(studentIndex, 1);

    return studentEmail;
  }

  hasStudent(studentEmail) {
    return this.getStudent(studentEmail) !== undefined;
  }

  getStudent(studentEmail) {
    return this.studentList.find((student) => student.email === studentEmail);
  }
}

module.exports = Cohort;
