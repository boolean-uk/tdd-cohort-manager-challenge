class Cohort {
  constructor(num) {
    this.name = `Cohort ${num}`;
    this.students = [];
  }

  add(newStudent) {
    this.students.push(newStudent);
  }

  remove(name) {
    for (const studentProfile of this.students) {
      if (studentProfile.fullName === name)
        return this.students.filter((student) => student.fullName !== name);
    }
    return "ERROR – this student do not exist";
  }
}

module.exports = Cohort;
