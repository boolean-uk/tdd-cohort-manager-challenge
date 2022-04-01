class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName;
    this.students = [];
    this.cohortMax = 3;
  }

  add(student) {
    console.log();
    if (this.cohortMax > this.students.length) {
      this.students.push(student);
      return this.students;
    } else return "Cohort at full capacity";
  }

  // isn't [i] and this.students[i] targeting the same thing
  remove(studentID) {
    const existError = "Student is not in the register";

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].studentId === studentID) {
        this.students.splice(i, 1);
        return this.students;
      }
    }

    return existError;
  }
}

module.exports = Cohort;
