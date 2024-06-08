class Cohort {
  constructor(name) {
      this.name = name;
      this.students = [];
      this.capacity = 24;
  }

  addStudent(student) {
      if (this.students.length >= this.capacity) {
          throw new Error('Cohort is at full capacity');
      }
      if (this.students.some(existingStudent => existingStudent.studentID === student.studentID)) {
          throw new Error('Student is already in this cohort');
      }
      this.students.push(student);
  }

  removeStudent(studentID) {
      const index = this.students.findIndex(student => student.studentID === studentID);
      if (index === -1) {
          throw new Error('Student not found in this cohort');
      }
      this.students.splice(index, 1);
  }
}

export default Cohort;
