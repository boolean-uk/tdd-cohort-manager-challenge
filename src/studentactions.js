const DATA = require('./students.json');
let COHORTS = [];
console.log(DATA);

//Is this level of abstraction unnecessary???
//Should the Cohort Manager Class which creates/removes cohorts also be responsible for adding/removing students???
class StudentActions {
  constructor() {}
  //Add student to a specific cohort
  AddStudentToCohort() {}

  //Remove student from a specific cohort
  RemoveStudentFromCohort() {}

  //Search for student by student ID
  findStudentByID() {}

  //The same student can't exist in multiple cohorts. - EXT
  checkStudentAcrossCohorts() {}

  //A student can't be removed from a cohort if it wasn't present in the first place. - EXT
  NotSureWhatToCallThisMethodYet() {}

  //Search for students by name (first and last) and return all matching results - EXT
  findStudentsMatchingFullname() {}
}
