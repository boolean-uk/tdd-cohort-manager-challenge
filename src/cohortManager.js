class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentId = 1
  }

  get(cohortNum) {
    return this.cohortList.find((cohort) => cohort.name === cohortNum)
  }

  add(newCohort) {
    const existingCohort = this.get(newCohort.name)
    if (!newCohort.name || existingCohort)
      return Error('Empty name or name already exist')
    this.cohortList.push(newCohort)
    return 'You have added Cohort ' + newCohort.name
  }

  search(cohortNum) {
    const targetCohort = this.get(cohortNum)
    if (!targetCohort) return Error('this cohort do not exist')
    return targetCohort
  }

  remove(cohortNum) {
    const targetCohort = this.get(cohortNum)
    const targetIndex = this.cohortList.indexOf(targetCohort)
    if (!targetCohort) return Error('this cohort do not exist')
    this.cohortList.splice(targetIndex, 1)
    return this.cohortList
  }

  createStudentArr() {
    return this.cohortList.map((cohort) => cohort.students).flat()
  }

  checkOverlapStudents() {
    const nonOverlapStudents = []
    const overlapStudents = []
    const studentArr = this.createStudentArr()

    for (const student of studentArr) {
      !nonOverlapStudents.includes(student)
        ? nonOverlapStudents.push(student)
        : overlapStudents.push(student)
    }
    return overlapStudents
  }

  searchStudent(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`

    for (const cohort of this.cohortList) {
      const targetStudent = cohort.students.find(
        (student) => student.fullName === fullName
      )
      if (targetStudent)
        return `${targetStudent.fullName} is in Cohort ${cohort.name}`
    }
    return Error(`${fullName} do not exist`)
  }
}
module.exports = CohortManager
