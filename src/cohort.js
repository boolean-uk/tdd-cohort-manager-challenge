class Cohort {
  constructor(num) {
    this.num = num;
    this.students = [];
  }

  add(student) {
    this.students.push(student);
    return `You've added ${student.fullName} to Cohort ${this.num}`;
  }
}

module.exports = Cohort;
