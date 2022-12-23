class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  createCohort(str) {
    const cohort = {
      name: str,
      students: []
    }
    if (this.findCohortBy(str) === true) {
      throw new Error('A cohort with this name already exists')
    }
    this.cohorts.push(cohort)
    return cohort
  }

  findCohortBy(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    if (cohort === undefined) return false
    return true
  }

  getAllCohorts() {
    return this.cohorts
  }

  searchForCohortBy(name) {
    if (this.findCohortBy(name) === false)
      throw new Error('A cohort with this name does NOT exist')
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    return foundCohort
  }

  removeCohort(name) {
    if (this.findCohortBy(name) === false)
      throw new Error('A cohort with this name does NOT exist')
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    const index = this.cohorts.indexOf(foundCohort)
    return this.cohorts.splice(index, 1)[0]
  }

  addStudent(firstName, lastName, github, email, name) {
    this.id++
    const student = {
      id: this.id,
      firstName,
      lastName,
      github,
      email
    }

    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (!foundCohort) throw new Error('A cohort with this name does NOT exist')
    foundCohort.students.push(student)
    return foundCohort
  }

  //   findStudentBy(cohortname, id) {
  //     const students = cohortname.students
  //     const student = students.find((student) => student.id === id)
  //     if (student === undefined)
  //       throw new Error('A Student with this ID does NOT exist')
  //     return student
  //   }

  removeStudent(cohortname, id) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortname
    )
    if (!foundCohort) throw new Error('A cohort with this name does NOT exist')
    const students = foundCohort.students
    const foundStudent = students.find((student) => student.id === id)
    return foundStudent
  }
}

// push deleted cohort into a deleted cohort array
// maybe add this in later ^

// remove student
// use findStudentBy(id)
// use splice to remove student from students array
// throw Error if student does not exist

// need to make a .find in a findStudentBy(ID) function

// 2 parameters studentID , Cohort name
// first loop through all cohorts + find a match
// once the cohort is found save it in a const
// the loop through found cohort + use student id to look for it
// once it is found save it + its index
// splice it using its index + return the student obj that was removed

module.exports = CohortManager
