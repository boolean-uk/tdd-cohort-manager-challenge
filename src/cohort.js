class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.studentList = []
  }

  addStudent(student) {
    this.studentList.push(student)
    return this.studentList
  }

  removeStudent(id) {
    //Go through a for loop using this.studentList array to search for a student to remove.
    //If this.studentList[i].id is equal to id
    //Write this.studentList.splice() to remove the student from the list.
    //return this.studentList or || a string saying: "Student not found"
  }
}
module.exports = Cohort
