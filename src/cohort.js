class Cohort {
  constructor() {
    this.cohortObject = {
      cohortName: '',
      studentList: []
    }
    this.cohortList = []
    this.unassignedStudents = []
  }

  findCohort(cohortName) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!cohort) {
      return 'cohort does not exist'
    }
    return cohort
  }

  findStudent(studentID) {
    const student = this.unassignedStudents.find(
      (student) => student.studentID === studentID
    )
    if (!student) {
      return 'student does not exist'
    }
    return student
  }

  createCohort(cohortName) {
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (existingCohort) {
      return 'cohort already exists'
    }

    this.cohortObject.cohortName = cohortName
    this.cohortList.push(this.cohortObject)
    console.log(this.cohortList)
    return this.cohortList
  }

  createStudent(uniqueID, firstName, lastName, githubUsername, email) {
    const newStudent = {
      studentID: uniqueID,
      firstName,
      lastName,
      githubUsername,
      email
    }
    this.studentID++
    console.log(newStudent)
    this.unassignedStudents.push(newStudent)
    return newStudent
  }

  addStudentToCohort(studentID, cohortName) {
    const whichCohort = this.findCohort(cohortName)
    const whichStudent = this.findStudent(studentID)
    const existingStudent = whichCohort.studentList.find(
      (student) => student.studentID === studentID
    )
    if (existingStudent) {
      return 'student already in this cohort'
    }
    whichCohort.studentList.push(whichStudent)
    return this.cohortList
  }

  removeCohort(cohortName) {
    const whichCohort = this.findCohort(cohortName)
    const newList = []
    this.cohortList.map((e) => {
      if (e !== whichCohort) {
        newList.push(e)
      }
      return newList
    })
    this.cohortList = newList
    return this.cohortList
  }
}

class Student {
  constructor(studentID, firstName, lastName, githubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

export { Cohort, Student }
